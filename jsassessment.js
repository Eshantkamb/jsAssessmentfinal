//variable to hold nfts
const myNFTs = [];

//function to take values as metadata for NFTs
//made an object metadata
function mintNFT(name,gender,haircolour,accessories){
    const _metadata = new Object() //object to store metadata of nfts
        _metadata.name = name;
        _metadata.gender = gender;
        _metadata.haircolour = haircolour;
        _metadata.accessories = accessories;
   
        myNFTs.push(_metadata);  //using .push() to make entires in the object
    
}
console.log("Minted NFTs are\n");

//made the function listnfts to print the minted nfts 
function listNFTs(){
    for(i=0;i<myNFTs.length;i++){        //using for loop to print the minted nfts

       console.log("|Name = "+ myNFTs[i].name +"|");
       console.log("|Gender = "+ myNFTs[i].gender +"|");
       console.log("|Hair-colour = "+ myNFTs[i].haircolour +"|");
       console.log("|Accessories = "+ myNFTs[i].accessories +"|");
       console.log("\n");
    }

}
//made the function gettotalsupply
function getTotalSupply(){
    console.log("Total NFTs = " + myNFTs.length);  //total number of nfts
}
//calling all the functions
mintNFT("Mortal","Male","Black","Hat");
mintNFT("Scout","Male","Grey","Watch");
mintNFT("Alina","Female","Blonde","ear-ring");
listNFTs();
getTotalSupply();
