import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CalculatorComponent extends Component {
  @tracked resultados = [];
  @tracked model = { numero1: 0.0, numero2: 0.0 };

  sumar = () => {
    let resultafo =
      parseFloat(this.model.numero1) + parseFloat(this.model.numero2);

    this.resultados = [
      ...this.resultados,
      `${this.model.numero1} + ${this.model.numero2} = ${resultafo}`,
    ];
  };

  _restar = () => {
    let resultafo = parseFloat(this.model.numero1) - parseFloat(this.model.numero2);

    this.resultados = [
      ...this.resultados,
      `${this.model.numero1} - ${this.model.numero2} = ${resultafo}`,
    ];
  };
  get restar() {
    return this._restar;
  }
  set restar(value) {
    this._restar = value;
  }

  multiplicar = () => {
    let resultafo = parseFloat(this.model.numero1) * parseFloat(this.model.numero2);
    
    this.resultados = [
      ...this.resultados,
      `${this.model.numero1} * ${this.model.numero2} = ${resultafo}`,
    ];
  };

  dividir = () => {
    let resultafo = parseFloat(this.model.numero1) / parseFloat(this.model.numero2);
    
    this.resultados = [
      ...this.resultados,
      `${this.model.numero1} / ${this.model.numero2} = ${resultafo}`,
    ];
  };
}
