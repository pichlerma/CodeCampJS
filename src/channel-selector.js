import {bindable} from 'aurelia-framework';
/**
 * Created by mpichler on 14.04.16.
 */
export class ChannelSelector {
    @bindable
    channel = "default";
    channels = ["default","info","warning","danger"];
}