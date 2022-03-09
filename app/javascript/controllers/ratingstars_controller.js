import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["star1", "star2", "star3", "star4", "star5", "inputrating"];

  ratingScore1(event) {
    this.star1Target.classList.add("star");
    this.star2Target.classList.remove("star");
    this.star3Target.classList.remove("star");
    this.star4Target.classList.remove("star");
    this.star5Target.classList.remove("star");
    this.inputratingTarget.value = 1;
  }

  ratingScore2(event) {
    this.star1Target.classList.add("star");
    this.star2Target.classList.add("star");
    this.star3Target.classList.remove("star");
    this.star4Target.classList.remove("star");
    this.star5Target.classList.remove("star");
    this.inputratingTarget.value = 2;
  }

  ratingScore3(event) {
    this.star1Target.classList.add("star");
    this.star2Target.classList.add("star");
    this.star3Target.classList.add("star");
    this.star4Target.classList.remove("star");
    this.star5Target.classList.remove("star");
    this.inputratingTarget.value = 3;
  }

  ratingScore4(event) {
    this.star1Target.classList.add("star");
    this.star2Target.classList.add("star");
    this.star3Target.classList.add("star");
    this.star4Target.classList.add("star");
    this.star5Target.classList.remove("star");
    this.inputratingTarget.value = 4;
  }

  ratingScore5(event) {
    this.star1Target.classList.add("star");
    this.star2Target.classList.add("star");
    this.star3Target.classList.add("star");
    this.star4Target.classList.add("star");
    this.star5Target.classList.add("star");
    this.inputratingTarget.value = 5;
  }
}