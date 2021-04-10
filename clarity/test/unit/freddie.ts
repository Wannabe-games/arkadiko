import { Client, Provider, ProviderRegistry } from "@blockstack/clarity";

describe("freddie test suite", () => {
  let trait: Client;
  let vaultTrait: Client;
  let daoClient: Client;
  let arkadikoToken: Client;
  let mockPox: Client;
  let stxReserveClient: Client;
  let oracleClient: Client;
  let tokenClient: Client;
  let freddieClient: Client;
  let provider: Provider;

  before(async () => {
    provider = await ProviderRegistry.createProvider();
    trait = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.mock-ft-trait", "mock-ft-trait", provider);
    vaultTrait = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.vault-trait", "vault-trait", provider);
    oracleClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.oracle", "oracle", provider);
    mockPox = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.mock-pox", "mock-pox", provider);
    daoClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.dao", "dao", provider);
    arkadikoToken = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.arkadiko-token", "arkadiko-token", provider);
    tokenClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.xusd-token", "xusd-token", provider);
    stxReserveClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.stx-reserve", "stx-reserve", provider);
    freddieClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.freddie", "freddie", provider);
  });

  it("should have a valid syntax", async () => {
    await trait.deployContract();
    await vaultTrait.deployContract();
    await tokenClient.deployContract();
    await arkadikoToken.deployContract();
    await mockPox.deployContract();
    await daoClient.deployContract();
    await oracleClient.deployContract();
    await stxReserveClient.deployContract();

    await freddieClient.checkContract();
  });

  after(async () => {
    await provider.close();
  });
});
