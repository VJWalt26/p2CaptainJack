setClickHandler("Spoils" , GoldDivvy);

function GoldDivvy() {
	var PirateFun = (getInput("PirateNum") - 2) * 3;
		console.log (PirateFun);
	var GoldLeft = getInput("GoldCoins") - PirateFun;
		console.log(GoldLeft + " after PirateFun");
	var CaptainCheat = Math.floor(GoldLeft * .12);
		setHTML ("CaptainCut" , "The Captain gets " + CaptainCheat + " gold coins.");
	    GoldLeft = GoldLeft - CaptainCheat;
		console.log(GoldLeft + " after CaptainCheat");
	var MateCheat = Math.floor(GoldLeft * .08);
		setHTML("MateCut" , "The First Mate gets " + MateCheat + " gold coins.");
        GoldLeft = GoldLeft - MateCheat;
		console.log(GoldLeft + " After MateCheat"); 
	var GoldSplit = Math.floor(GoldLeft / getInput("PirateNum"));
		setHTML ("CrewCut" , "The Crew, including the Captain and First Mate, get " + GoldSplit  +" gold coins each.");
	var CaptainSpoils = GoldSplit + CaptainCheat;
		console.log(CaptainSpoils + " Total CaptainAmt");
	var MateSpoils = GoldSplit + MateCheat;
		console.log(MateSpoils + " Total MateAmt");
	var PBALeft = Math.floor(GoldLeft - (GoldSplit * getInput("PirateNum")));
		setHTML ("PBA" , "And the PBA, those swarthy swillers, get " + PBALeft + " gold coins."); 
		
}
