import san from 'san'
import { router } from 'san-router' 
import App from './App.san'
import Demo01 from './demo01/Demo01.san'

router.add({rule: '/', Component: App, target: "#app"})
router.add({rule: '/demo01', Component: Demo01, target: '#app'})

router.start()