class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many :games, through: :players_games
  has_many :players_games
end
