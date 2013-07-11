class Survey
  include Mongoid::Document
  include Mongoid::MultiParameterAttributes

  field :ice_cream, type: String
  field :superhero, type: String
  field :movie_star, type: String
  field :world_end, type: Date
  field :super_bowl, type: String
  belongs_to :user
  attr_accessible :ice_cream, :superhero, :movie_star, :world_end, :super_bowl, :survey
  validates_presence_of :ice_cream, :superhero, :movie_star, :world_end, :super_bowl
  validates_length_of :ice_cream, :superhero, :movie_star, :super_bowl, maximum: 32


end
