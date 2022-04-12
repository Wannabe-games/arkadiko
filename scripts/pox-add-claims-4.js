
// node proposal-emergency-shutdown.js
require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(1741), 'ustx': tx.uintCV(163749) }),
tx.tupleCV({ 'to': tx.uintCV(1748), 'ustx': tx.uintCV(19494) }),
tx.tupleCV({ 'to': tx.uintCV(1749), 'ustx': tx.uintCV(97470) }),
tx.tupleCV({ 'to': tx.uintCV(1750), 'ustx': tx.uintCV(40585740) }),
tx.tupleCV({ 'to': tx.uintCV(1751), 'ustx': tx.uintCV(7798) }),
tx.tupleCV({ 'to': tx.uintCV(1752), 'ustx': tx.uintCV(687392) }),
tx.tupleCV({ 'to': tx.uintCV(1754), 'ustx': tx.uintCV(273943182) }),
tx.tupleCV({ 'to': tx.uintCV(1755), 'ustx': tx.uintCV(6238068) }),
tx.tupleCV({ 'to': tx.uintCV(1756), 'ustx': tx.uintCV(273943182) }),
tx.tupleCV({ 'to': tx.uintCV(1758), 'ustx': tx.uintCV(19774961) }),
tx.tupleCV({ 'to': tx.uintCV(1759), 'ustx': tx.uintCV(1516630) }),
tx.tupleCV({ 'to': tx.uintCV(1760), 'ustx': tx.uintCV(26901670) }),
tx.tupleCV({ 'to': tx.uintCV(1766), 'ustx': tx.uintCV(584819) }),
tx.tupleCV({ 'to': tx.uintCV(1767), 'ustx': tx.uintCV(662795) }),
tx.tupleCV({ 'to': tx.uintCV(1768), 'ustx': tx.uintCV(38988) }),
tx.tupleCV({ 'to': tx.uintCV(1769), 'ustx': tx.uintCV(12297371) }),
tx.tupleCV({ 'to': tx.uintCV(1770), 'ustx': tx.uintCV(7822755) }),
tx.tupleCV({ 'to': tx.uintCV(1775), 'ustx': tx.uintCV(1169638) }),
tx.tupleCV({ 'to': tx.uintCV(1784), 'ustx': tx.uintCV(272915488) }),
tx.tupleCV({ 'to': tx.uintCV(1787), 'ustx': tx.uintCV(39548) }),
tx.tupleCV({ 'to': tx.uintCV(1789), 'ustx': tx.uintCV(2612191) }),
tx.tupleCV({ 'to': tx.uintCV(1793), 'ustx': tx.uintCV(2311417) }),
tx.tupleCV({ 'to': tx.uintCV(1800), 'ustx': tx.uintCV(9743911) }),
tx.tupleCV({ 'to': tx.uintCV(1801), 'ustx': tx.uintCV(9743911) }),
tx.tupleCV({ 'to': tx.uintCV(1803), 'ustx': tx.uintCV(11174142) }),
tx.tupleCV({ 'to': tx.uintCV(1804), 'ustx': tx.uintCV(194940) }),
tx.tupleCV({ 'to': tx.uintCV(1805), 'ustx': tx.uintCV(2924095) }),
tx.tupleCV({ 'to': tx.uintCV(1809), 'ustx': tx.uintCV(9746982) }),
tx.tupleCV({ 'to': tx.uintCV(1811), 'ustx': tx.uintCV(77976) }),
tx.tupleCV({ 'to': tx.uintCV(1815), 'ustx': tx.uintCV(19111882) }),
tx.tupleCV({ 'to': tx.uintCV(1818), 'ustx': tx.uintCV(129010225) }),
tx.tupleCV({ 'to': tx.uintCV(1824), 'ustx': tx.uintCV(5661047) }),
tx.tupleCV({ 'to': tx.uintCV(1825), 'ustx': tx.uintCV(11306499) }),
tx.tupleCV({ 'to': tx.uintCV(1828), 'ustx': tx.uintCV(4931973) }),
tx.tupleCV({ 'to': tx.uintCV(1835), 'ustx': tx.uintCV(1758356) }),
tx.tupleCV({ 'to': tx.uintCV(1836), 'ustx': tx.uintCV(155952) }),
tx.tupleCV({ 'to': tx.uintCV(1837), 'ustx': tx.uintCV(19494) }),
tx.tupleCV({ 'to': tx.uintCV(1840), 'ustx': tx.uintCV(779759) }),
tx.tupleCV({ 'to': tx.uintCV(1842), 'ustx': tx.uintCV(2146597) }),
tx.tupleCV({ 'to': tx.uintCV(1843), 'ustx': tx.uintCV(19494) }),
tx.tupleCV({ 'to': tx.uintCV(1846), 'ustx': tx.uintCV(7798) }),
tx.tupleCV({ 'to': tx.uintCV(1848), 'ustx': tx.uintCV(789611) }),
tx.tupleCV({ 'to': tx.uintCV(1849), 'ustx': tx.uintCV(58482) }),
tx.tupleCV({ 'to': tx.uintCV(1852), 'ustx': tx.uintCV(10841365) }),
tx.tupleCV({ 'to': tx.uintCV(1853), 'ustx': tx.uintCV(15722803) }),
tx.tupleCV({ 'to': tx.uintCV(1854), 'ustx': tx.uintCV(233928) }),
tx.tupleCV({ 'to': tx.uintCV(1855), 'ustx': tx.uintCV(194940) }),
tx.tupleCV({ 'to': tx.uintCV(1856), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(1857), 'ustx': tx.uintCV(104694651) }),
tx.tupleCV({ 'to': tx.uintCV(1859), 'ustx': tx.uintCV(38988) }),
tx.tupleCV({ 'to': tx.uintCV(1863), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(1864), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(1867), 'ustx': tx.uintCV(1344225) }),
tx.tupleCV({ 'to': tx.uintCV(1868), 'ustx': tx.uintCV(7817079) }),
tx.tupleCV({ 'to': tx.uintCV(1869), 'ustx': tx.uintCV(15010352) }),
tx.tupleCV({ 'to': tx.uintCV(1870), 'ustx': tx.uintCV(4873491) }),
tx.tupleCV({ 'to': tx.uintCV(1873), 'ustx': tx.uintCV(788602) }),
tx.tupleCV({ 'to': tx.uintCV(1875), 'ustx': tx.uintCV(3957275) }),
tx.tupleCV({ 'to': tx.uintCV(1881), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(1883), 'ustx': tx.uintCV(41717082) }),
tx.tupleCV({ 'to': tx.uintCV(1886), 'ustx': tx.uintCV(589245) }),
tx.tupleCV({ 'to': tx.uintCV(1888), 'ustx': tx.uintCV(393487) }),
tx.tupleCV({ 'to': tx.uintCV(1895), 'ustx': tx.uintCV(116964) }),
tx.tupleCV({ 'to': tx.uintCV(1938), 'ustx': tx.uintCV(2955285) }),
tx.tupleCV({ 'to': tx.uintCV(1940), 'ustx': tx.uintCV(432766) }),
tx.tupleCV({ 'to': tx.uintCV(1941), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(1942), 'ustx': tx.uintCV(19494) }),
tx.tupleCV({ 'to': tx.uintCV(1944), 'ustx': tx.uintCV(779759) }),
tx.tupleCV({ 'to': tx.uintCV(1946), 'ustx': tx.uintCV(136458) }),
tx.tupleCV({ 'to': tx.uintCV(1949), 'ustx': tx.uintCV(10068205) }),
tx.tupleCV({ 'to': tx.uintCV(1950), 'ustx': tx.uintCV(3508913) }),
tx.tupleCV({ 'to': tx.uintCV(1955), 'ustx': tx.uintCV(35480562) }),
tx.tupleCV({ 'to': tx.uintCV(1956), 'ustx': tx.uintCV(1949396) }),
tx.tupleCV({ 'to': tx.uintCV(1957), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(1958), 'ustx': tx.uintCV(1949396) }),
tx.tupleCV({ 'to': tx.uintCV(1959), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(1961), 'ustx': tx.uintCV(13645774) }),
tx.tupleCV({ 'to': tx.uintCV(1962), 'ustx': tx.uintCV(38174233) }),
tx.tupleCV({ 'to': tx.uintCV(1969), 'ustx': tx.uintCV(3266904) }),
tx.tupleCV({ 'to': tx.uintCV(1970), 'ustx': tx.uintCV(5848189) }),
tx.tupleCV({ 'to': tx.uintCV(1971), 'ustx': tx.uintCV(974698) }),
tx.tupleCV({ 'to': tx.uintCV(1972), 'ustx': tx.uintCV(4873491) }),
tx.tupleCV({ 'to': tx.uintCV(1973), 'ustx': tx.uintCV(194940) }),
tx.tupleCV({ 'to': tx.uintCV(1976), 'ustx': tx.uintCV(2339276) }),
tx.tupleCV({ 'to': tx.uintCV(1977), 'ustx': tx.uintCV(1949396) }),
tx.tupleCV({ 'to': tx.uintCV(1980), 'ustx': tx.uintCV(15595171) }),
tx.tupleCV({ 'to': tx.uintCV(1982), 'ustx': tx.uintCV(4288672) }),
tx.tupleCV({ 'to': tx.uintCV(1983), 'ustx': tx.uintCV(116964) }),
tx.tupleCV({ 'to': tx.uintCV(1984), 'ustx': tx.uintCV(2729155) }),
tx.tupleCV({ 'to': tx.uintCV(1985), 'ustx': tx.uintCV(58481890) }),
tx.tupleCV({ 'to': tx.uintCV(1987), 'ustx': tx.uintCV(473302) }),
tx.tupleCV({ 'to': tx.uintCV(1989), 'ustx': tx.uintCV(114429565) }),
tx.tupleCV({ 'to': tx.uintCV(1990), 'ustx': tx.uintCV(171546878) }),
tx.tupleCV({ 'to': tx.uintCV(1991), 'ustx': tx.uintCV(1559517) }),
tx.tupleCV({ 'to': tx.uintCV(1992), 'ustx': tx.uintCV(113064988) }),
tx.tupleCV({ 'to': tx.uintCV(1995), 'ustx': tx.uintCV(113513349) }),
tx.tupleCV({ 'to': tx.uintCV(1997), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(1999), 'ustx': tx.uintCV(105033475) }),
tx.tupleCV({ 'to': tx.uintCV(2000), 'ustx': tx.uintCV(38987927) }),
tx.tupleCV({ 'to': tx.uintCV(2001), 'ustx': tx.uintCV(1949396) }),
tx.tupleCV({ 'to': tx.uintCV(2002), 'ustx': tx.uintCV(1949396) }),
tx.tupleCV({ 'to': tx.uintCV(2003), 'ustx': tx.uintCV(4288672) }),
tx.tupleCV({ 'to': tx.uintCV(2004), 'ustx': tx.uintCV(10136861) }),
tx.tupleCV({ 'to': tx.uintCV(2005), 'ustx': tx.uintCV(3898793) }),
tx.tupleCV({ 'to': tx.uintCV(2006), 'ustx': tx.uintCV(77976) }),
tx.tupleCV({ 'to': tx.uintCV(2007), 'ustx': tx.uintCV(3468954) }),
tx.tupleCV({ 'to': tx.uintCV(2008), 'ustx': tx.uintCV(35089134) }),
tx.tupleCV({ 'to': tx.uintCV(2009), 'ustx': tx.uintCV(623807) }),
tx.tupleCV({ 'to': tx.uintCV(2010), 'ustx': tx.uintCV(13569757) }),
tx.tupleCV({ 'to': tx.uintCV(2011), 'ustx': tx.uintCV(584819) }),
tx.tupleCV({ 'to': tx.uintCV(2012), 'ustx': tx.uintCV(19883843) }),
tx.tupleCV({ 'to': tx.uintCV(2013), 'ustx': tx.uintCV(12532669) }),
tx.tupleCV({ 'to': tx.uintCV(2014), 'ustx': tx.uintCV(389879) }),
tx.tupleCV({ 'to': tx.uintCV(2015), 'ustx': tx.uintCV(3274986) }),
tx.tupleCV({ 'to': tx.uintCV(2018), 'ustx': tx.uintCV(15595171) }),
tx.tupleCV({ 'to': tx.uintCV(2023), 'ustx': tx.uintCV(6238068) }),
tx.tupleCV({ 'to': tx.uintCV(2026), 'ustx': tx.uintCV(966901) }),
tx.tupleCV({ 'to': tx.uintCV(2029), 'ustx': tx.uintCV(2880593) })
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-yield-v2-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    fee: new BN(100000, 10),
    nonce: new BN(745, 10),
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
