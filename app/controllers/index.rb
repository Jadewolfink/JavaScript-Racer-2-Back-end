enable :sessions

get '/' do
  @game_list = Game.last(10)
  erb :home
end

get '/game' do
  current_game = Game.find_by(id: session[:game_id])
  @player1 = current_game.players[0].name
  @player2 = current_game.players[1].name
  erb :game
end

post '/game' do
	new_game = Game.create
	player1 = params[:player1]
	player2 = params[:player2]
	session[:game_id] = new_game.id
	puts session
		if Player.exists?(name: player1)
			@player1 = Player.find_by(name: player1)
		else
			@player1 = Player.create(name: player1)
		end
		if Player.exists?(name: player2)
			@player2 = Player.find_by(name: player2)
		else
			@player2 = Player.create(name: player2)
		end
	new_game.players << @player1 
	PlayersGame.last.update(player_number: 1)
	new_game.players << @player2
	PlayersGame.last.update(player_number: 2)
	redirect '/game'
end


post '/updatewinner' do
	current_game =	Game.find_by(id: session[:game_id])
	@winner = Player.find_by(name: params[:winner])
	@notwinner = Player.find_by(name: params[:notwinner])
	@players_game = PlayersGame.find_by(player: @winner.id)
	@players_game.update(won?: 1)
	@players_game.save
	@players_notwinner = PlayersGame.find_by(player: @notwinner.id)
	@players_notwinner.update(won?: 0)
	@players_notwinner.save

	{winner: @winner.name}.to_json
	
end
