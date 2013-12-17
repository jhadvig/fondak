class HomeController < ApplicationController

  def index
    carousel_images = *(1..29)
    @picked_images = carousel_images.sample(10)

  end

end