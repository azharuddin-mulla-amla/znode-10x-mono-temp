import {WebStoreWidget_getSlider} from "@znode/clients/server"


export async function getSliderData(props: any) {
 
const slider = await WebStoreWidget_getSlider("345ssd", props);
const sliderData = slider.Slider;

return sliderData;
}