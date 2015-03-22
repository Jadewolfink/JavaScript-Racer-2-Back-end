class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :players, through: :players_games
  has_many :players_games
end
