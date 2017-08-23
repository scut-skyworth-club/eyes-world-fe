<template>
  <div id="Sphere"></div>
</template>

<script>
require('pannellum');
// import img1 from '../../server/img2.jpg'

export default {
  name: 'Sphere',
  props: [
    'url'
  ],
  data: function () {
    return {
      id: 'Sphere',
      // url:'https://pannellum.org/images/alma.jpg',
    }
  },
  methods: {
    imageLoader: function () {

    },
    panoramaViewer: function (id, picUrl) {
      let pano =  pannellum.viewer(id, {
        'type': 'equirectangular',
        'panorama': picUrl,
        'autoLoad': true,
        'showControls': false
      });

      return pano;
    },
    panoramaControl: function (viewer) {
      class KeyWatcher {
        constructor (viewer) {
          this.viewer = viewer;
          this._handleKeyCode = this._handleKeyCode.bind(this);
        }

        createKeyWatcher () {
          document.addEventListener('keydown', this._handleKeyCode);
        }
        removeKeyWatcher () {
          document.removeEventListener('keydown', this._handleKeyCode);
        }
        _handleKeyCode (e) {
          let speed = 10;

          switch (e.keyCode) {
            // left
            case 37: this._xMove(-speed); break;
            // up
            case 38: this._yMove(speed); break;
            // right
            case 39: this._xMove(speed); break;
            // down
            case 40: this._yMove(-speed); break;
            // front
            case 13: this._zMove(-speed); break;
            // back
            case 4: this._zMove(speed); break;
          }
        }
        _xMove (direction) {
          this.viewer.setYaw(this.viewer.getYaw() + direction);
        }
        _yMove (direction) {
          this.viewer.setPitch(this.viewer.getPitch() + direction);
        }
        _zMove (direction) {
          this.viewer.setHfov(this.viewer.getHfov() + direction);
        }
      }

      let keyWatcher = new KeyWatcher(viewer);
      keyWatcher.createKeyWatcher();
    },
  },
  mounted () {

    (function fullScreen (id) {

      let viewSize = document.getElementById(id);
      let windowH = document.documentElement.clientHeight;
      let windowW = document.documentElement.clientWidth;

      viewSize.style.width = windowW + 'px';
      viewSize.style.height = windowH + 'px';
    })(this.id)

    // instantiation
    let pano = this.panoramaViewer(this.id, this.url);
    this.panoramaControl(pano);
  }
}
</script>

<style scoped>

</style>
