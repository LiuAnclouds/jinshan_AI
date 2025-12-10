import FaceHome from './views/FaceHome.vue';
import H5Recognition from './views/H5Recognition.vue';
<<<<<<< HEAD
import BlocklyOpenCV from './views/BlocklyOpenCV.vue';
=======
>>>>>>> b24584f (HighLight)

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
<<<<<<< HEAD
    {
        path: '/face-project/blockly',
        name: 'FaceBlocklyDemo',
        component: BlocklyOpenCV,
        meta: { title: 'OpenCV 图形化编程' }
    }
=======
>>>>>>> b24584f (HighLight)
];