// using http://pojo.sodhanalibrary.com/string.html
monopoly.rollingDiceTemplate =
'  <div class="dice-board">'+
''+
    ''+
'    <div class="container-dice" >'+
'      <div id=\'dice1\' class="dice dice-one" style="float:left;">'+
'        <div id="dice-one-side-one" class=\'side one\'>'+
'          <div class="divot one-1"></div>'+
'        </div>'+
'        <div id="dice-one-side-two" class=\'side two\'>'+
'          <div class="divot two-1"></div>'+
'          <div class="divot two-2"></div>'+
'        </div>'+
'        <div id="dice-one-side-three" class=\'side three\'>'+
'          <div class="divot three-1"></div>'+
'          <div class="divot three-2"></div>'+
'          <div class="divot three-3"></div>'+
'        </div>'+
'        <div id="dice-one-side-four" class=\'side four\'>'+
'          <div class="divot four-1"></div>'+
'          <div class="divot four-2"></div>'+
'          <div class="divot four-3"></div>'+
'          <div class="divot four-4"></div>'+
'        </div>'+
'        <div id="dice-one-side-five" class=\'side five\'>'+
'          <div class="divot five-1"></div>'+
'          <div class="divot five-2"></div>'+
'          <div class="divot five-3"></div>'+
'          <div class="divot five-4"></div>'+
'          <div class="divot five-5"></div>'+
'        </div>'+
'        <div id="dice-one-side-six" class=\'side six\'>'+
'          <div class="divot six-1"></div>'+
'          <div class="divot six-2"></div>'+
'          <div class="divot six-3"></div>'+
'          <div class="divot six-4"></div>'+
'          <div class="divot six-5"></div>'+
'          <div class="divot six-6"></div>'+
'        </div>'+
'      </div>'+
'</div></div>';

monopoly.boardTemplate='<div class="responsive">'+
    '<div class="mainSquare">'+
        '<div class="row top">'+
            '{{#each top_row}}'+
                '<div class="square1">'+
                    '<div style="height: 80%;background-image: url(\'{{backgroundImage}}\');background-size: 100% 100%;"></div>'+
                    '<div class="squareFooter{{footerColor}}">{{footerText}}</div>'+
                    '<div class="firstLine firstLine-top rotation2" id={{id}}>'+'{{title}}'+'<br>'+
                        '{{#if start}}'+
                            '{{#each players}}'+
                              '<span id="{{playerId}}"><img height="18" width="14" src="images/{{tokenColor}}.png"> </span>&nbsp;'+
                              '{{/each}}'+
                            '{{/if}}'+
                    '</div>'+
                '</div>'+
            '{{/each}}'+
        '</div>'+
        
        '<div class="row center">'+
            '<div class="square2">'+ 
                '{{#each left_col}}'+
                    '<div class="squareSide">'+
                        '<div class="headerSide header-left {{color}}" style="background-image: url(\'{{backgroundImage}}\');background-size: 100% 100%;"></div>'+
                        '<div class="firstLine firstLine-left rotation1" id={{id}}>'+'{{title}}'+'<br>'+'</div>'+
                    '</div>'+
                    '<div class="squareFooter{{footerColor}}">{{footerText}}</div>'+
                '{{/each}}'+
            '</div>'+    
            '<div class="square9" >'+
                '<div class="centerDiceContainer">'+
                    '<div class="centerDiceRowRight" >'+
                        '<span class="playerName">{{playerTitle}}: <span id="player"></span></span>'+
                    '</div>'+

                    '<div class="centerDiceRow">'+
                        '<div style="height: 9vw;width: 37%;background-image: url(images/logo_{{language}}.png);background-size: 100% 100%;"></div>'+
                    '</div>'+

                    '<div class="centerDiceRow">'+monopoly.rollingDiceTemplate+'</div>'+
                    '<div class="centerDiceRow">'+
                        '<div id="rollIt" class="sideScoreBoardButton" onclick="monopoly.rollDice()" style="width: 15%">{{rollIt}}</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            
            '<div class="square2">'+
                '{{#each right_col}}'+
                    '<div class="squareSide">'+
                        '<div class="headerSide header-left {{color}}" style="background-image: url(\'{{backgroundImage}}\');background-size: 100% 100%;"></div>'+
                        '<div class="firstLine firstLine-right rotation3" id={{id}}>'+'{{title}}'+'<br>'+'</div>'+
                    '</div>'+
                    '<div class="squareFooter{{footerColor}}">{{footerText}}</div>'+
                '{{/each}}'+
            '</div>'+
        '</div>'+
        '<div class="row top">'+
            '{{#each bottom_row}}'+
                '<div class="square1">'+
                    '<div style="height: 80%;background-image: url(\'{{backgroundImage}}\');background-size: 100% 100%;"></div>'+
                    '<div class="squareFooter{{footerColor}}">{{footerText}}</div>'+
                    '<div class="firstLine firstLine-top rotation2" id={{id}}>'+'{{title}}'+'<br>'+'</div>'+
                '</div>'+
            '{{/each}}'+
        '</div>'+
    '</div>'+
'</div>';

monopoly.sideScoreBoardTemplate=
'<div class="sideScoreBoardMainContainer">'+
'<div class="sideScoreBoard">'+
'<div class="sideScoreBoardContainer">'+
'        <div class="sideScoreBoardRow">'+
'            <div class="sideScoreBoardCol"></div>'+
'            <div class="sideScoreBoardCol"><img src="images/redheadercommon.png" style="width: 80%;margin-left: 2.7vw;"></div>                <div class="sideScoreBoardCol"></div>'+
'        </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol weekTitle">WEEK: <span id="weekContent">100</span></div>'+
'        <div class="sideScoreBoardCol"></div>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{bankBalanceTitle}}:</div>'+
'        <span id="bankBalance" class="sideScoreBoardCol">₹ {{bankBalanceAmount}}</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{cashTitle}}:</div>'+
'        <span class="sideScoreBoardCol" id="cash">₹ {{cashAmount}}</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{debtTitle}}:</div>'+
'        <span id="debt" class="sideScoreBoardCol">₹ {{debtAmount}}</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'       <div class="sideScoreBoardCol sideScoreBoardButton" onclick="ubsApp.openTransferToBank()">{{transferTitle}}</div>'+
'       <div class="sideScoreBoardCol sideScoreBoardButton" onclick="ubsApp.openWithdrawFromBank()">{{withdrawTitle}}</div>'+
'       <div class="sideScoreBoardCol sideScoreBoardButton" onclick="ubsApp.openPayOffScenario()">{{payOffTitle}}</div>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol"></div>'+
'        <div class="sideScoreBoardCol"><img src="images/redheadercommon.png" style="width: 80%;margin-left: 2.7vw;"></div>                <div class="sideScoreBoardCol"></div>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{inventoryTitle}}:</div>'+
'        <span id="inventoryValueContent" class="sideScoreBoardCol" >100</span>'+
'        <span id="inventoryContent" class="sideScoreBoardCol" >50</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'       <div class="sideScoreBoardCol"></div>'+
'       <div class="sideScoreBoardCol sideScoreBoardButton" onclick="ubsApp.openPurchaseScenario()">{{buy}}</div>'+
'       <div class="sideScoreBoardCol"></div>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol"></div>'+
'        <div class="sideScoreBoardCol"><img src="images/redheadercommon.png" style="width: 80%;margin-left: 2.7vw;"></div>'+
'        <div class="sideScoreBoardCol"></div>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{reputationTitle}}:</div>'+
'        <span id="reputationContent" class="sideScoreBoardCol">100</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'        <div class="sideScoreBoardCol">{{advantageCardTitle}}:</div>'+
'        <span id="advantageCardContent" class="sideScoreBoardCol">100</span>'+
'    </div>'+
'    <div class="sideScoreBoardRow">'+
'       <div class="sideScoreBoardCol"></div>'+
'       <div class="sideScoreBoardCol sideScoreBoardButton" onclick="ubsApp.openAdvantageCard()">{{convertTitle}}</div>'+
'       <div class="sideScoreBoardCol"></div>'+
'    </div>'+
'  </div>'+
'</div>'+
'  <div class="sideScoreBoardRow">'+
'         <div class="sideScoreBoardCol sideScoreBoardButton" onclick="ubsApp.openQuizIfValid()">{{quizTitle}}</div>'+
'         <div class="sideScoreBoardCol sideScoreBoardHelpButton" onclick="ubsApp.endGame()"></div>'+
'         <div class="sideScoreBoardCol sideScoreBoardEndButton" onclick="ubsApp.endGame()"></div>'+
'  </div>'+
'</div>';





/*monopoly.rollingDiceTemplate = '<body class = "diceBody"><div style="position:absolute; top:32%; left:37%;">'+

'  <div class="rollscene" id="rollscene" style= "height:{{diceSceneWidth}}px; display:table; margin:auto;"}>'+
'    <div onclick="mainroll()" class="cube">'+
'      <div id="class_1" class="cube_face_1">O</div>'+
'        <div id="class_2" class="cube_face_2">O O</div>'+
'      <div id="class_3" class="cube_face_3">  O<br>  O<br>O</div>'+
'      <div id="class_4" class="cube_face_4">O  O<br><br>O  O</div>'+
'      <div id="class_5" class="cube_face_5">O  O<br>  O<br>O  O</div>'+
'      <div id="class_6" class="cube_face_6">O  O<br>O  O<br>O  O</div>'+
'    </div>'+
'    <div class="rollButton">'+
     '<button id ="rollIt" onclick="monopoly.rollDice()" >Roll it </button>'+
'    </div>'+
'  </div>'+
'</div></body>';*/


/*
'      <div id=\'dice2\' style=" float:right;" class="dice dice-one">'+
'        <div id="dice-one-side-one" class=\'side one\'>'+
'          <div class="divot one-1"></div>'+
'        </div>'+
'        <div id="dice-one-side-two" class=\'side two\'>'+
'          <div class="divot two-1"></div>'+
'          <div class="divot two-2"></div>'+
'        </div>'+
'        <div id="dice-one-side-three" class=\'side three\'>'+
'          <div class="divot three-1"></div>'+
'          <div class="divot three-2"></div>'+
'          <div class="divot three-3"></div>'+
'        </div>'+
'        <div id="dice-one-side-four" class=\'side four\'>'+
'          <div class="divot four-1"></div>'+
'          <div class="divot four-2"></div>'+
'          <div class="divot four-3"></div>'+
'          <div class="divot four-4"></div>'+
'        </div>'+
'        <div id="dice-one-side-five" class=\'side five\'>'+
'          <div class="divot five-1"></div>'+
'          <div class="divot five-2"></div>'+
'          <div class="divot five-3"></div>'+
'          <div class="divot five-4"></div>'+
'          <div class="divot five-5"></div>'+
'        </div>'+
'        <div id="dice-one-side-six" class=\'side six\'>'+
'          <div class="divot six-1"></div>'+
'          <div class="divot six-2"></div>'+
'          <div class="divot six-3"></div>'+
'          <div class="divot six-4"></div>'+
'          <div class="divot six-5"></div>'+
'          <div class="divot six-6"></div>'+
'        </div>'+
'      </div>'+

'  '+*/



monopoly.staticTemplate ='<div class="{{width}}" style="{{style}}"   onclick="monopoly.renderPageforBoard(\'{{onClickPage}}\',\'{{amount}}\')">'+
'       {{src}}'+
' </div>'+
'<div id={{audioId}}></div>';

monopoly.formTemplate='{{#if nameTitle}}<br><div class=\"title\" >{{nameTitle}}:</span><input type=\"text\" id=\"{{nameId}}\" style=\"margin-left:9px;\"></input><br><br>{{/if}}'+

'{{#if numberOfTokens}}'+
    '{{#each numberOfTokens}}'+
        '<input type=\"radio\" style="display:inline;padding-left:5em; " name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\"><img src=\"images/{{tokenColor}}.png\" style=\"height:32px;width:32px;\"></label>'+
    '{{/each}}'+

'{{/if}}'+
'{{#if difficulty}}'+
    '{{#each difficulty}}'+
        '<input type=\"radio\" style\"display:inline;padding-left:5em; \" name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\">{{text}}</label>'+
    '{{/each}}'+
'{{/if}}'+
'{{#if language}}'+
    '{{#each language}}'+
        '<input type=\"radio\" style\"display:inline;padding-left:5em; \" name=\"{{radioName}}\" value=\"{{radioValue}}\" id=\"{{radioId}}\"><label for=\"{{radioId}}\">{{text}}</label>'+
    '{{/each}}'+
'{{/if}}';


monopoly.endGameTemplate = '<div style="'+
                           '    position:  absolute;'+
                           '    top: 1%;'+
                           '    right: 1%;'+
                           '    width: 13vw;'+
                           '"> <img src="{{gameLogo}}" style="'+
                           '    width: 100%;'+
                           '"> </div>'+
                           ''+
                           '<div style="'+
                           '    background-image: url(\'images/welcomeredstrip.png\');'+
                           '    color: white;'+
                           '    font-weight: 700;'+
                           '    height: 10vh;'+
                           '    text-align: center;'+
                           '    font-size: xx-large;'+
                           '    margin-top: 5%;'+
                           '">'+
                           '    GAME OVER'+
                           '</div>'+
                           '<div style="margin-top: 12px;">'+
                           '    '+
                           '    {{#each players}}'+
                           '        <div style="width:{{widthOfEachPlayer}}%;float: left; {{#if showBorder}}border-left: 1px solid red; {{/if}}padding-left: 10px;    padding-right: 18px;">'+
                           '            <div style="display: inline-block;width: 100%;">'+
                           '                <div style="float: left;">{{BankBalance}}</div>'+
                           '                <div style="float: right;">{{currentWeekBankBalance}}</div>'+
                           '            </div>'+
                           ''+
                           '            <div style="display: inline-block;width: 100%;">'+
                           '                <div style="float: left;">{{Cash}}</div>'+
                           '                <div style="float: right;">{{currentWeekCash}}</div>'+
                           '            </div>'+
                           ''+
                           '            <div style="display: inline-block;width: 100%;">'+
                           '                <div style="float: left;">{{Credit}}</div>'+
                           '                <div style="float: right;">{{currentWeekCredit}}</div>'+
                           '            </div>'+
                           ''+
                           '            <div style="display: inline-block;width: 100%;">'+
                           '                <div style="float: left;">{{INVENTORY}}</div>'+
                           '                <div style="float: right;">{{currentInventory}}</div>'+
                           '            </div>'+
                           '            <div style="display: inline-block;width: 100%;">'+
                           '                <div style="float: left;">{{ReputationPoints}}</div>'+
                           '                <div style="float: right;">{{currentWeekReputationPts}}</div>'+
                           '            </div>'+
                           '            <div style="display: inline-block;width: 100%;">'+
                           '                <div style="float: left;">{{AdvantageCard}}</div>'+
                           '                <div style="float: right;">{{currentWeekAdvantageCard}}</div>'+
                           '            </div>'+
                           ''+
                           '        </div>'+
                           '    {{/each}}'+
                           ''+
                           ''+
                           '</div>';

