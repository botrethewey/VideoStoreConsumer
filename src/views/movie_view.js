import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';

const MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    console.log("rendering indiv movie view");
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click .movie" : "sendMovie",
    "click #rent-movie" : "rentMovie"
    // #addToLib click : addToLib
  },

  addToLib: function() {
    // call create on the object
    // disable and change button
    // add opaque div to view
  },

  sendMovie: function(event) {
    console.log("in movie view clicked on movie");
    this.trigger("sendMovie", this);
  },

  rentMovie: function() {
    console.log("you have rented this movie");
  }

});

export default MovieView;
