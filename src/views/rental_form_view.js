import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import CustomerList from '../collections/customer_list.js';


var rentalCustomers = new CustomerList();
rentalCustomers.fetch({reset: true});

const RentalFormView = Backbone.View.extend ({
  initialize: function(params) {
    this.collection = rentalCustomers;
    this.model = params.model;
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    console.log("Inside the rental form render");
    var selectOptions = "";
    // console.log(this.collection);
    this.collection.each(function(customer){
      var newOption = "<option value='" + customer.id + "' >" + customer.get("name") + "</option>";
      selectOptions += newOption;
    });
    // console.log(selectOptions);

    var compiledTemplate = this.template({
      model: this.model.toJSON(),
      options: selectOptions
    });
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default RentalFormView;
