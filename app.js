var vm = new Vue({
  el: '#app',
  data: {
    range: '0',
    currentVal: '',
    buttons: [
      {
        id: 1,
        button: 'one',
        value: '1'
      },
      {
      id: 2,
      button: 'one',
      value: '2'
      },
      {
      id: 3,
      button: 'one',
      value: '3'
      },
      {
      id: 4,
      button: 'one',
      value: '4'
      },
      {
      id: 5,
      button: 'one',
      value: '5'
      },
      {
      id: 6,
      button: 'one',
      value: '6'
      },
      {
      id: 7,
      button: 'one',
      value: '7'
      },
      {
      id: 8,
      button: 'one',
      value: '8'
      },
      {
      id: 9,
      button: 'one',
      value: '9'
      },
      {
      id: 10,
      button: 'one',
      value: '0'
      },
      {
        id: 11,
        button: 'plus',
        value: '+'
      },
      {
        id: 12,
        button: 'equals',
        value: '='
      }
    ],
    sign: false,
    numOne: '',
    numTwo: ''
  },
  methods: {
    addRange: function(val) {
      if((this.range.length == 1 && this.range == 0) || this.numOne == '') {
        this.range = '';
      }
      this.range += val;
      if(val == '+') {
        this.sign = true;
      }
      if(this.sign != true) {
        if(val != '=') {
          this.numOne += val;
        }
        
      }
      else {
        this.numTwo += val;
      }
      if(val == '=') {
        this.range = '';
        this.range = parseInt(this.numOne) + parseInt(this.numTwo);
        this.numOne = '';
        this.numTwo = '';
        this.sign = false;
      }
    }
  }
});