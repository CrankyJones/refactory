export class Vendor {
  constructor() {
    this.fuel = 0;
    this.woodSell = 2;
    this.copperSell = 5;
    this.ironSell = 8;
    this.goldSell = 10;
    this.woodBuy = 5;
    this.woodQuantity = 5;
    this.copperQuantity = 5;
    this.ironQuantity = 5;
    this.goldQuantity = 0;
    this.copperBuy = 10;
    this.ironBuy = 15;
    this.goldBuy = 20;
  }

  sell(item) {

  }

  buy(item) {

  }
};

export class MiningMachine {
  constructor() {
    this.fuel = 0;
  }

  MinMach(nodeType, nodeQuantity) {
    this.storage = 0;
    for (let i = 0; i < nodeQuantity; i++) {
      setTimeout(function () {
        this.storage++;
        nodeQuantity--;
      }, 10000)
    }
    let minerals = [nodeType, this.storage];
    return minerals;


  }
};

export class Smelter {
  constructor() {
    this.fuel = 0;
    this.queue = [];
    this.woodToCoal = 3;
    this.copperToIngot = 3;
    this.ironToIngot = 3;
    this.goldToIngot = 3;
  }


  WoodRefuel(machine) {
    machine.fuel++;
  }

  CoalRefuel(machine) {
    machine.fuel = machine.fuel + 5;
  }

  SmeltWood(playerInventory) {
    if (this.fuel > 0) {
      if (playerInventory.wood >= this.woodtoCoal) {
        playerInventory.wood = playerInventory.wood - this.woodtoCoal;
        playerInventory.coal++;
        this.fuel--;
      } else {
        alert('Not enough wood.');
      }
      return (playerInventory);
    } else {
      alert('Not enough fuel.');
    }
  }

  SmeltCopper(playerInventory) {
    if (this.fuel > 0) {
      if (playerInventory.copper >= this.copperToIngot) {
        playerInventory.copper = playerInventory.copper - this.copperToIngot;
        playerInventory.copperIngot++;
        this.fuel--;
      } else {
        alert('Not enough copper.');
      }
      return (playerInventory);
    } else {
      alert('Not enough fuel.');
    }
  }

  SmeltIron(playerInventory) {
    if (this.fuel > 0) {
      if (playerInventory.iron >= this.ironToIngot) {
        playerInventory.iron = playerInventory.iron - this.ironToIngot;
        playerInventory.ironIngot++;
        this.fuel--;
      } else {
        alert('Not enough iron.');
      }
      return (playerInventory);
    } else {
      alert('Not enough fuel.');
    }
  }

  SmeltGold(playerInventory) {
    if (this.fuel > 0) {
      if (playerInventory.gold >= this.goldToIngot) {
        playerInventory.gold = playerInventory.gold - this.goldToIngot;
        playerInventory.goldIngot++;
        this.fuel--;
      } else {
        alert('Not enough gold.');
      }
      return playerInventory;
    } else {
      alert('Not enough fuel.')
    }
  }
};