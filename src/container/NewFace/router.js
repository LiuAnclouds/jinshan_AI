import FaceHome from './views/FaceHome.vue';
import H5Recognition from './views/H5Recognition.vue';


export default [
    {
        path: '/face-project',
        name: 'FaceProjectHome',
        component: FaceHome,
        meta: { title: '人脸识别项目测试' }
    },
    {
        path: '/face-project/h5',
        name: 'FaceH5Demo',
        component: H5Recognition,
        meta: { title: 'Web H5 人脸识别' }
    },


];