import '../css/style.css';
import apiService from './apiService.js';
import galleryItem from '../template/galleryItem.hbs';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
import refs from './refs.js';
import throttle from 'lodash/throttle';

const { API_KEY, API_URL } = apiService;
let page = 1;
let perPage = 12;
let btnMore = false;
let isLoading = false;
//-----// REFS //-----//
const {
  searchForm,
  serchInput,
  ul,
  sectionGallery,
  loadeMoreChecked,
  loadChecked,
} = refs;

//-----// Verification Checked last visit//-----//

function verificationChecked() {
  if (localStorage.getItem('Type load') === 'true') {
    loadChecked.checked = true;
  }
}
verificationChecked();

//-----// Gallery Function //-----//

const getListByName = async name => {
  const result = await fetch(
    `${API_URL}?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=${perPage}&key=${API_KEY}`,
  );
  return await result.json();
};

const createList = photoList => {
  return photoList.reduce((acc, photo) => {
    return acc + galleryItem(photo);
  }, '');
};

const addBtnMore = () => {
  if (serchInput.value <= 0 || btnMore) {
    return;
  }
  btnMore = true;
  const btn = ` <button class="btn-more__js">
                    Load more
                </button>`;
  sectionGallery.insertAdjacentHTML('beforeend', btn);
};

const renderList = async () => {
  page = 1;
  const { hits } = await getListByName(serchInput.value);
  ul.innerHTML = createList(hits);
};

const loadeMore = async () => {
  page += 1;
  const { hits } = await getListByName(serchInput.value);
  ul.insertAdjacentHTML('beforeend', createList(hits));
};

//-----// type Download Gallery  //-----//

function checkedLoadeType() {
  if (loadChecked.checked) {
    PNotify.alert('Load more of scroll!');
    localStorage.setItem('Type load', 'true');
    myScroll();
  } else {
    PNotify.alert('Load more of button!');
    localStorage.setItem('Type load', 'false');
    addBtnMore();
  }
}

//-----// listener //-----//
//---// form listener //---//
searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  renderList();
  checkedLoadeType();
});

//---// button listener //---//
sectionGallery.addEventListener('click', async e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  loadeMore();
});

//---// Type loader listener //---//

loadeMoreChecked.addEventListener('click', e => {
  if (e.target.nodeName === 'INPUT') {
    checkedLoadeType();
  }
});

//-----//  basicLightbox  //-----//

ul.addEventListener('click', e => {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  console.dir(e.target.dataset.source);
  const url = e.target.dataset.source;
  basicLightbox.create(`<img class="lightBox-IMG" src="${url}">`).show();
});

//-----// Scroll //-----//

function myScroll() {
  const renderAutoScroll = () => {
    isLoading = true;
    if (!loadChecked.checked) {
      return;
    }
    loadeMore()
      .then(e => {
        isLoading = false;
      })
      .catch(error => {
        throw error;
      })
      .finally(() => {
        isLoading = false;
      });
  };
  const onScrollEvent = () => {
    if (isLoading) return;
    const listBottom = sectionGallery.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    if (listBottom / 2 <= windowHeight) {
      renderAutoScroll();
    }
  };

  function addInfinityScroll() {
    window.addEventListener('scroll', throttle(onScrollEvent, 100));
  }
  addInfinityScroll();
}
