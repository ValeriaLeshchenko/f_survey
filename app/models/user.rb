class User
  include Mongoid::Document
  include Mongoid::MultiParameterAttributes

  field :first_name, type: String
  field :last_name, type: String
  field :email_address, type: String
  field :birthday, type: Date
  field :shoe_size, type: Integer

  has_one :survey
  attr_accessible :first_name, :last_name, :email_address, :birthday, :shoe_size, :user
  validates_presence_of :first_name, :last_name, :email_address, :birthday, :shoe_size
  validates_length_of :first_name, :last_name, :email_address, maximum: 32
  validates_inclusion_of :shoe_size, in: 20..50

end
