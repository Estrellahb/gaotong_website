const { AUTH_KEY, LOGIN_PAGE, storage, goToPage, signOut } = window.GaotongAuth;
const PORTAL_PAGE = '/';
const documents = window.GaotongData?.documents || [];
const notices = window.GaotongData?.notices || [];

const state = {
  activeTab: 'home',
  keyword: '',
  noticeDept: '',
  docType: '',
  docDept: '',
  docLevel: '',
  selectedDocNumber: documents[0]?.number || ''
};
