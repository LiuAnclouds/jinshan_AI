import Home from '@/container/Environmental/Home.vue';
import ImageRec from '@/container/Environmental/ImageRec/index.vue';
import Analyze from '@/container/Environmental/FlowchartAnalyze.vue';
import Build from '@/container/Environmental/FlowchartBuild.vue';

const routes = [
  { path: '', component: Home },
  { path: 'image-rec', component: ImageRec },
  { path: 'analyze', component: Analyze },
  { path: 'build', component: Build },
]

export default routes