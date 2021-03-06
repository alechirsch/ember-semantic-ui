import Ember from 'ember';
import layout from '../templates/components/ui-column';

const n = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8':'eight',
    '9':'nine',
    '10':'ten',
    '11':'eleven',
    '12':'twelve', 
    '13':'thirteen', 
    '14':'fourteen', 
    '15':'fifteen',
    '16':'sixteen'
} 

export default Ember.Component.extend({
    layout,
    _wide: Ember.computed('wide', {
        get(){
            let wide = n[String(this.get('wide'))];
            if (!wide){
                return ''
            }else {
                return wide+' wide';
            }
        }
    }),
    classNameBindings: ['_wide', '_componentClass'],
    _componentClass: 'column',
});
