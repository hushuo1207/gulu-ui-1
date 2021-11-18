import Dialog from './Dialog.vue';
import { createApp, h} from 'vue';

export const openDialog = (options) => {
    // console.log('121')   

    const {title, content, ok, cancel} = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        //@ts-ignore
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render () {
            return h(
                Dialog, 
                {visiable: true,'onUpdate:visiable':(newVisiable) => {
                if(newVisiable == false)  {close()}
            },
            ok, cancel
        }, 
            {
                title:title,content:content
            })
        }
    })
    app.mount(div)
}