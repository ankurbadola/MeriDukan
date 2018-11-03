ubsApp.getWithdrawFromBankTemplate=function(templateConfig,tempVar){
    var object={};
	object.color=userArray[playerChance].getplayerColor();
	object.cash=userArray[playerChance].getplayerScore();
	object.bankBalance=userArray[playerChance].getBankBalance();
	
	templateConfig=$.extend(templateConfig,object);
	tempVar.html+=ubsPayOffTemplate(templateConfig);
}

ubsApp.openWithdrawFromBank=function(){
	ubsApp.startCurrentScenario();
	ubsApp.renderPageByName("withdrawFromBank");
}

ubsApp.withdrawFromBank=function(){
    var number =parseInt(document.getElementById("debtPaymentText").value);
    if(number>0)
    {
        if(number<=userArray[playerChance].getBankBalance())
        {   
            userArray[playerChance].setplayerScore(userArray[playerChance].getplayerScore()+number);
            userArray[playerChance].setBankBalance(userArray[playerChance].getBankBalance()-number);
            ubsApp.closeCurrentScenario();
            ubsApp.currentPlayerContents();
            ubsApp.openResultPopup({
                        "message" : ubsApp.getTranslation("withdrawSuccessMsg").replace("{{withdrawAmount}}",number),
                        "header" : ubsApp.getTranslation("SUCCESS"),
                        "headerStyle" : "text-align: center;  color: black; font-weight: 700;",
                        "buttons":[
                            {
                                'id':"closePopupButton",
                                'name' : ubsApp.getTranslation("CLOSE"),
                                'action': "ubsApp.closePopup();"
                            }
                        ]
             });
        }
        else{
            document.getElementById("result").innerHTML=ubsApp.translation["bankBalance"];
        }
    }
    else{
        document.getElementById("result").innerHTML=ubsApp.translation["validAmount"];
    }
}
