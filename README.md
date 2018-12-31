
# vue-bootstrap-toasts

This was bulit with bootstrap 4 "[toasts](https://getbootstrap.com/docs/4.2/components/toasts/)" component in mind, so It depends on bootstrap 4 toasts component's css.
### Demo?

https://rakk7.github.io/vue-bootstrap-toasts/demo/

### Why did I create this? there is many of Vue toasts plugins out there?
I created this because I am already working with bootstrap 4, and also I needed Vue to make toasts component more dynamic. Other plugins add too much complex I don't need.
### How to install?
```
npm install vue-bootstrap-toasts
```
### How to use it?
1- Import..
```
import VueBootstrapToasts from 'vue-bootstrap-toasts
Vue.use(VueBootstrapToasts)
```

2 - Add the component in your html, somewhere at the top..
```
<Toasts></Toasts>
```
Or if u want override default values
```
<Toasts
	:max-messages="7"
	:time-out="5000" // 5 secs
></Toasts>
```
3 - Call these methods where ever you want inside vue..

```
this.$toast.success('yo yo I am here');
this.$toast.error('this is not good, you better watch out!');
this.$toast.warning('watchhh out!);
this.$toast.info('There was a point, very briefly, you were the youngest person on the planet');
```


### Thats it.
