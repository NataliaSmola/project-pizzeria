import {templates, select} from './../settings.js';
import AmountWidget from './../components/AmountWidget.js';
import DatePicker from './DatePicker.js';


class Booking {
  constructor(widgetWrapper) {
    const thisBooking = this;

    thisBooking.render(widgetWrapper);
    thisBooking.initWidgets();
  }

  render(widgetWrapper) {
    const thisBooking = this;
    /*generate HTML code based on temple*/
    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = widgetWrapper;

    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);

    thisBooking.dom.datePicker = thisBooking.dom.wrapper.querySelector(select.widgets.datePicker.wrapper);
  }
  initWidgets() {
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);

  }
}

export default Booking;
