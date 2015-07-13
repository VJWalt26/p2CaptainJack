setClickHandler("Spoils" , GoldDivvy);

function GoldDivvy() {
	var HookFun = getInput("PirateNum") * 3;
		console.log (HookFun);
	var GoldLeft = getInput("GoldCoins") - HookFun;
		console.log(GoldLeft);
	var CaptainCheat = GoldLeft * .12;
		setHTML ("CaptainCut" , "The Captain gets " + CaptainCheat + " gold coins.");
	var NewGoldLeft = GoldLeft - CaptainCheat;
		console.log(NewGoldLeft);
	var MateCheat = NewGoldLeft * .08;
		setHTML("MateCut" , "The First Mate gets " + MateCheat + " gold coins.");
	var LastGoldLeft = NewGoldLeft - MateCheat;
		console.log(LastGoldLeft); 
	var GoldSplit = LastGoldLeft / getInput("PirateNum");
		setHTML ("CrewCut" , "The Crew, including the Captain and First Mate, get " + GoldSplit  +" gold coins.");
	var CaptainSpoils = GoldSplit + CaptainCheat;
		console.log(CaptainSpoils);
	var MateSpoils = GoldSplit + MateCheat;
		console.log(MateSpoils);
	var PBALeft = (LastGoldLeft + CaptainCheat + MateCheat + HookFun) % getInput("GoldCoins");
		setHTML ("PBA" , "And the PBA, those swarthy swillers, get " + PBALeft + " gold coins."); 
		
}
