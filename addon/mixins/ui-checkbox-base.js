import Ember from 'ember';

export default Ember.Mixin.create({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "input"
     */
    tagName: 'div',

    /**
     * the checkbox 
     *
     * @property {Ember.String} theme
     */
    _theme: 'checkbox',
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', '_theme', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'checkbox',

    /**
     * 
     *
     * @property {Ember.String} value
     */
    value: null,

    /**
     * checkbox checked
     *
     * @property {Ember.Boolean} checked
     */
    checked: false,
    /**
     * checkbox name
     *
     * @property {Ember.String} name
     */
    name: null,

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        this.$().checkbox();
        let {value, checked} = this.getProperties('value', 'checked');
        let input = this.$('input');

        //set checbox stated
        input.prop('checked', checked);
        //bind input change event
        this.$('input').change(()=>{
            let isChecked = input.is(':checked');
            this._updateValue(isChecked);
            this.set('checked', isChecked);
            this.sendAction('action', isChecked, this.value);
        });

    }.on('didInsertElement'),
    _updateValue(checked){
        if(typeof this.attrs.update ==='function'){
            if(checked){
                this.attrs.update(this.value);
            }else {
                this.attrs.update('');
            }
        }
    },
    didInitAttrs(){
        //set checked value
        this._updateValue(this.get('checked'));
    },
    /**
     * @function setChecked
     * @observes "checked" 
     * @returns  {void}
     */
    setChecked: function() {
        let input = this.$('input');
        //when checked change, set checkbox state
        input.prop('checked', this.get('checked'));
        //change value
        this._updateValue(this.get('checked'));
    }.on('didUpdateAttrs')
});