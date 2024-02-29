import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  // eslint-disable-next-line ember/no-actions-hash
  actions = {
    sumar() {
      this.calculator.sumar();
    },

    restar() {
      this.calculator.restar();
    },

    multiplicar() {
      this.calculator.multiplicar();
    },

    dividir() {
      this.calculator.dividir();
    },
  };
}
