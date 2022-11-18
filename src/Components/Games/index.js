import React from 'react'
import './styles.css';
import   {Link} from "react-router-dom";
function Games() {
    const myGames = [
        {
            name : "Soduku Classic",
            logo: "https://static.gamezop.com/SJgx126Qc0H/cover.jpg",
            category : "Puzzle/Logic",
            Popularity : "696K Plays",
            link : "https://zv1y2i8p.play.gamezop.com/g/SJgx126Qc0H",
            description : "Game Zone brings to you one of the most popular brain games - Sudoku! fill a 9x9 grid with numbers so that each row, column and 3x3 section contain all of the digits between 1 and 9."
        },
        {
            name : "Tic Tac Toe",
            logo: "https://static.gamezop.com/H1WmafkP9JQ/cover.jpg",
            category : "Strategy",
            Popularity : "154M Plays",
            link : "https://zv1y2i8p.play.gamezop.com/g/H1WmafkP9JQ",
            description : "Play the classic Tic Tac Toe online! Play in 3 difficulty modes or challenge thousands of other players online!"
        },
        {
            name : "Pool Master",
            logo: "https://static.gamezop.com/hgempP8Sc/cover.jpg",
            category : "Sports/Racing",
            Popularity : "143K Plays",
            link : "https://zv1y2i8p.play.gamezop.com/g/hgempP8Sc",
            description : "Get ready to play the most exciting Pool game ever! With modes like Classic, Time Trial, and Practice Mode, your fun will end never."
        },
        {
            name : "Snake & Ladders",
            logo: "https://static.gamezop.com/rJWyhp79RS/cover.jpg",
            category : "Adventure",
            Popularity : "1.8M Plays",
            link : "https://zv1y2i8p.play.gamezop.com/g/rJWyhp79RS",
            description : "Ladders take you up, and snakes bring you down. Be the first to get to 100 to win!"
        },
        {
            name : "Carrom Hero",
            logo: "https://static.gamezop.com/H1Hgyn6XqAS/cover.jpg",
            category : "Strategy",
            Popularity : "126M Plays",
            link : "https://zv1y2i8p.play.gamezop.com/g/H1Hgyn6XqAS",
            description : "Here's the most fun Carrom game online! Play against thousands of players in 2 unique modes: Freestyle and Professional!"  
        },
        {
            name : "Solitaire Gold",
            logo: "https://static.gamezop.com/rkPlk2T7qAr/cover.jpg",
            category : "Strategy",
            Popularity : "7.8M Plays",
            link : "https://zv1y2i8p.play.gamezop.com/g/rkPlk2T7qAr",
            description : "Solitaire Gold follows classic Solitaire rules: the catch is you only get 5 mins to play. The sooner you finish, the bigger the bonus you receive! Come, give it a try!"
        },
        {
            name : "Bowling Stars",
            logo: "https://static.gamezop.com/BkdJhTX50B/cover.jpg",
            category : "Sports/Racing",
            Popularity : "14M Plays",
            link : "https://zv1y2i8p.play.gamezop.com/g/BkdJhTX50B",
            description : "Enjoy the best Bowling game online — compete with thousands of players! Let's see how many pins you can knock down!"
        },
        {
            name : "Ludo with Friends",
            logo: "https://static.gamezop.com/SkhljT2fdgb/cover.jpg",
            category : "Strategy",
            Popularity : "49M Plays",
            link : "https://zv1y2i8p.play.gamezop.com/g/SkhljT2fdgb",
            description : "Here's the best multiplayer Ludo game! Play with your friends or with thousands of other players."   
        },
        {
            name : "Archery Champs",
            logo: "https://static.gamezop.com/Bk9ynTQqCB/cover.jpg",
            category : "Sports/Racing",
            Popularity : "5.6M Plays",
            link : "https://zv1y2i8p.play.gamezop.com/g/Bk9ynTQqCB",
            description : "Here's the most fun online archery game for you! Play against thousands of online players 1 on 1. Choose from multiple bows, arrows, and sights as you go for the bullseye!"      
        }

    ]
  return (
    <div className='game-page'>
        <div className='feaatured'>
            <p className='featured2'>FEATURED GAMES</p>
        </div>
        <div className='game-container'>
            {
                myGames.map((current) =>{
                    return(
                            // 
                            <div className='game-list'>
                                <Link to = '/GamePage'>
                                <div className='game-img'>
                                    <img className='game-img2' src= {current.logo} alt='no img found' />
                                </div>
                                <div className='game-details'>
                                    <p className='game-name'>{current.name}</p>
                                    <div className='cp'>
                                        <p className='category'>Category : {current.category}</p>
                                        <p className='popularity'>Popularity : {current.Popularity}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        //  </Link>
                          ) 
                    })
            }
        </div>
    </div>
  )
}

export default Games