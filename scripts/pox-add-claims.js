require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(1279), 'usda': tx.uintCV(92779973) }),
tx.tupleCV({ 'to': tx.uintCV(1293), 'usda': tx.uintCV(13716123) }),
tx.tupleCV({ 'to': tx.uintCV(1310), 'usda': tx.uintCV(91947) }),
tx.tupleCV({ 'to': tx.uintCV(1329), 'usda': tx.uintCV(17042136) }),
tx.tupleCV({ 'to': tx.uintCV(1334), 'usda': tx.uintCV(4597) }),
tx.tupleCV({ 'to': tx.uintCV(1349), 'usda': tx.uintCV(175752) }),
tx.tupleCV({ 'to': tx.uintCV(1359), 'usda': tx.uintCV(2265395) }),
tx.tupleCV({ 'to': tx.uintCV(1370), 'usda': tx.uintCV(3636722) }),
tx.tupleCV({ 'to': tx.uintCV(1395), 'usda': tx.uintCV(107578) }),
tx.tupleCV({ 'to': tx.uintCV(1404), 'usda': tx.uintCV(232179) }),
tx.tupleCV({ 'to': tx.uintCV(1410), 'usda': tx.uintCV(7859665) }),
tx.tupleCV({ 'to': tx.uintCV(1424), 'usda': tx.uintCV(183894) }),
tx.tupleCV({ 'to': tx.uintCV(1441), 'usda': tx.uintCV(271244) }),
tx.tupleCV({ 'to': tx.uintCV(1447), 'usda': tx.uintCV(9141574) }),
tx.tupleCV({ 'to': tx.uintCV(1453), 'usda': tx.uintCV(306432) }),
tx.tupleCV({ 'to': tx.uintCV(1492), 'usda': tx.uintCV(1839) }),
tx.tupleCV({ 'to': tx.uintCV(1502), 'usda': tx.uintCV(951911) }),
tx.tupleCV({ 'to': tx.uintCV(1533), 'usda': tx.uintCV(749792) }),
tx.tupleCV({ 'to': tx.uintCV(1543), 'usda': tx.uintCV(197686) }),
tx.tupleCV({ 'to': tx.uintCV(1547), 'usda': tx.uintCV(367788) }),
tx.tupleCV({ 'to': tx.uintCV(1556), 'usda': tx.uintCV(4507314) }),
tx.tupleCV({ 'to': tx.uintCV(1574), 'usda': tx.uintCV(36779) }),
tx.tupleCV({ 'to': tx.uintCV(1576), 'usda': tx.uintCV(45973) }),
tx.tupleCV({ 'to': tx.uintCV(1581), 'usda': tx.uintCV(2355235) }),
tx.tupleCV({ 'to': tx.uintCV(1594), 'usda': tx.uintCV(486746) }),
tx.tupleCV({ 'to': tx.uintCV(1598), 'usda': tx.uintCV(45973) }),
tx.tupleCV({ 'to': tx.uintCV(1601), 'usda': tx.uintCV(70799) }),
tx.tupleCV({ 'to': tx.uintCV(1604), 'usda': tx.uintCV(924325) }),
tx.tupleCV({ 'to': tx.uintCV(1605), 'usda': tx.uintCV(942951) }),
tx.tupleCV({ 'to': tx.uintCV(1622), 'usda': tx.uintCV(8840666) }),
tx.tupleCV({ 'to': tx.uintCV(1643), 'usda': tx.uintCV(43286062) }),
tx.tupleCV({ 'to': tx.uintCV(1663), 'usda': tx.uintCV(183894) }),
tx.tupleCV({ 'to': tx.uintCV(1665), 'usda': tx.uintCV(4789114) }),
tx.tupleCV({ 'to': tx.uintCV(1673), 'usda': tx.uintCV(36779) }),
tx.tupleCV({ 'to': tx.uintCV(1674), 'usda': tx.uintCV(27584) }),
tx.tupleCV({ 'to': tx.uintCV(1675), 'usda': tx.uintCV(388016) }),
tx.tupleCV({ 'to': tx.uintCV(1676), 'usda': tx.uintCV(3006626) }),
tx.tupleCV({ 'to': tx.uintCV(1680), 'usda': tx.uintCV(239062) }),
tx.tupleCV({ 'to': tx.uintCV(1690), 'usda': tx.uintCV(11147) }),
tx.tupleCV({ 'to': tx.uintCV(1704), 'usda': tx.uintCV(2776117) }),
tx.tupleCV({ 'to': tx.uintCV(1715), 'usda': tx.uintCV(320440) }),
tx.tupleCV({ 'to': tx.uintCV(1803), 'usda': tx.uintCV(3267726) }),
tx.tupleCV({ 'to': tx.uintCV(1805), 'usda': tx.uintCV(689602) }),
tx.tupleCV({ 'to': tx.uintCV(1809), 'usda': tx.uintCV(2344623) }),
tx.tupleCV({ 'to': tx.uintCV(1815), 'usda': tx.uintCV(13792046) }),
tx.tupleCV({ 'to': tx.uintCV(1828), 'usda': tx.uintCV(1261319) }),
tx.tupleCV({ 'to': tx.uintCV(1849), 'usda': tx.uintCV(13792) }),
tx.tupleCV({ 'to': tx.uintCV(1855), 'usda': tx.uintCV(45973) }),
tx.tupleCV({ 'to': tx.uintCV(1859), 'usda': tx.uintCV(9195) }),
tx.tupleCV({ 'to': tx.uintCV(1864), 'usda': tx.uintCV(151713) }),
tx.tupleCV({ 'to': tx.uintCV(1867), 'usda': tx.uintCV(879938) }),
tx.tupleCV({ 'to': tx.uintCV(1873), 'usda': tx.uintCV(280662) }),
tx.tupleCV({ 'to': tx.uintCV(1875), 'usda': tx.uintCV(2772201) }),
tx.tupleCV({ 'to': tx.uintCV(1881), 'usda': tx.uintCV(91947) }),
tx.tupleCV({ 'to': tx.uintCV(1883), 'usda': tx.uintCV(9960171) }),
tx.tupleCV({ 'to': tx.uintCV(1886), 'usda': tx.uintCV(218386) }),
tx.tupleCV({ 'to': tx.uintCV(1895), 'usda': tx.uintCV(27584) }),
tx.tupleCV({ 'to': tx.uintCV(1900), 'usda': tx.uintCV(119531) }),
tx.tupleCV({ 'to': tx.uintCV(1905), 'usda': tx.uintCV(128778528) }),
tx.tupleCV({ 'to': tx.uintCV(1906), 'usda': tx.uintCV(750466) }),
tx.tupleCV({ 'to': tx.uintCV(1910), 'usda': tx.uintCV(3411414) }),
tx.tupleCV({ 'to': tx.uintCV(1923), 'usda': tx.uintCV(9750329) }),
tx.tupleCV({ 'to': tx.uintCV(1926), 'usda': tx.uintCV(1547836) }),
tx.tupleCV({ 'to': tx.uintCV(1933), 'usda': tx.uintCV(142731) }),
tx.tupleCV({ 'to': tx.uintCV(1957), 'usda': tx.uintCV(7818133) }),
tx.tupleCV({ 'to': tx.uintCV(1958), 'usda': tx.uintCV(468794) }),
tx.tupleCV({ 'to': tx.uintCV(1961), 'usda': tx.uintCV(3837356) }),
tx.tupleCV({ 'to': tx.uintCV(1971), 'usda': tx.uintCV(229867) }),
tx.tupleCV({ 'to': tx.uintCV(1973), 'usda': tx.uintCV(46740) }),
tx.tupleCV({ 'to': tx.uintCV(1976), 'usda': tx.uintCV(557496) }),
tx.tupleCV({ 'to': tx.uintCV(1977), 'usda': tx.uintCV(551682) }),
tx.tupleCV({ 'to': tx.uintCV(1982), 'usda': tx.uintCV(1163580) }),
tx.tupleCV({ 'to': tx.uintCV(1990), 'usda': tx.uintCV(135825085) }),
tx.tupleCV({ 'to': tx.uintCV(2000), 'usda': tx.uintCV(19336110) }),
tx.tupleCV({ 'to': tx.uintCV(2004), 'usda': tx.uintCV(3042134) }),
tx.tupleCV({ 'to': tx.uintCV(2008), 'usda': tx.uintCV(11050166) }),
tx.tupleCV({ 'to': tx.uintCV(2010), 'usda': tx.uintCV(3222891) }),
tx.tupleCV({ 'to': tx.uintCV(2018), 'usda': tx.uintCV(31912636) }),
tx.tupleCV({ 'to': tx.uintCV(2026), 'usda': tx.uintCV(230376) }),
tx.tupleCV({ 'to': tx.uintCV(2028), 'usda': tx.uintCV(56204317) }),
tx.tupleCV({ 'to': tx.uintCV(2029), 'usda': tx.uintCV(1611985) }),
tx.tupleCV({ 'to': tx.uintCV(2030), 'usda': tx.uintCV(37121) }),
tx.tupleCV({ 'to': tx.uintCV(2036), 'usda': tx.uintCV(2553867) }),
tx.tupleCV({ 'to': tx.uintCV(2037), 'usda': tx.uintCV(2553153) }),
tx.tupleCV({ 'to': tx.uintCV(2044), 'usda': tx.uintCV(74242) }),
tx.tupleCV({ 'to': tx.uintCV(2046), 'usda': tx.uintCV(448014595) }),
tx.tupleCV({ 'to': tx.uintCV(2050), 'usda': tx.uintCV(475241476) }),
tx.tupleCV({ 'to': tx.uintCV(2051), 'usda': tx.uintCV(1153000) }),
tx.tupleCV({ 'to': tx.uintCV(2060), 'usda': tx.uintCV(91947) }),
tx.tupleCV({ 'to': tx.uintCV(2061), 'usda': tx.uintCV(70541828) }),
tx.tupleCV({ 'to': tx.uintCV(2062), 'usda': tx.uintCV(4866977) }),
tx.tupleCV({ 'to': tx.uintCV(2063), 'usda': tx.uintCV(161420) }),
tx.tupleCV({ 'to': tx.uintCV(2066), 'usda': tx.uintCV(3689371) }),
tx.tupleCV({ 'to': tx.uintCV(2094), 'usda': tx.uintCV(183894) }),
tx.tupleCV({ 'to': tx.uintCV(2095), 'usda': tx.uintCV(27672) }),
tx.tupleCV({ 'to': tx.uintCV(2097), 'usda': tx.uintCV(3625899) }),
tx.tupleCV({ 'to': tx.uintCV(2100), 'usda': tx.uintCV(602094) }),
tx.tupleCV({ 'to': tx.uintCV(2104), 'usda': tx.uintCV(39077463) }),
tx.tupleCV({ 'to': tx.uintCV(2110), 'usda': tx.uintCV(927178496) }),
tx.tupleCV({ 'to': tx.uintCV(2113), 'usda': tx.uintCV(16591189) }),
tx.tupleCV({ 'to': tx.uintCV(2118), 'usda': tx.uintCV(17070788) }),
tx.tupleCV({ 'to': tx.uintCV(2121), 'usda': tx.uintCV(6436288) }),
tx.tupleCV({ 'to': tx.uintCV(2123), 'usda': tx.uintCV(231276) }),
tx.tupleCV({ 'to': tx.uintCV(2127), 'usda': tx.uintCV(8065443) }),
tx.tupleCV({ 'to': tx.uintCV(2129), 'usda': tx.uintCV(7051283) }),
tx.tupleCV({ 'to': tx.uintCV(2130), 'usda': tx.uintCV(1103364) }),
tx.tupleCV({ 'to': tx.uintCV(2131), 'usda': tx.uintCV(8025584) }),
tx.tupleCV({ 'to': tx.uintCV(2132), 'usda': tx.uintCV(7609775) }),
tx.tupleCV({ 'to': tx.uintCV(2135), 'usda': tx.uintCV(868296) }),
tx.tupleCV({ 'to': tx.uintCV(2139), 'usda': tx.uintCV(13419679) }),
tx.tupleCV({ 'to': tx.uintCV(2140), 'usda': tx.uintCV(1066818) }),
tx.tupleCV({ 'to': tx.uintCV(2179), 'usda': tx.uintCV(46135) }),
tx.tupleCV({ 'to': tx.uintCV(2183), 'usda': tx.uintCV(2201461) }),
tx.tupleCV({ 'to': tx.uintCV(2184), 'usda': tx.uintCV(1152814) }),
tx.tupleCV({ 'to': tx.uintCV(2185), 'usda': tx.uintCV(47812) }),
tx.tupleCV({ 'to': tx.uintCV(2187), 'usda': tx.uintCV(18497) }),
tx.tupleCV({ 'to': tx.uintCV(2190), 'usda': tx.uintCV(229623) }),
tx.tupleCV({ 'to': tx.uintCV(2191), 'usda': tx.uintCV(82847) }),
tx.tupleCV({ 'to': tx.uintCV(2192), 'usda': tx.uintCV(322623) }),
tx.tupleCV({ 'to': tx.uintCV(2195), 'usda': tx.uintCV(6646833) }),
tx.tupleCV({ 'to': tx.uintCV(2196), 'usda': tx.uintCV(461083) }),
tx.tupleCV({ 'to': tx.uintCV(2198), 'usda': tx.uintCV(922166) }),
tx.tupleCV({ 'to': tx.uintCV(2203), 'usda': tx.uintCV(919470) }),
tx.tupleCV({ 'to': tx.uintCV(2205), 'usda': tx.uintCV(229867) }),
tx.tupleCV({ 'to': tx.uintCV(2207), 'usda': tx.uintCV(316298) }),
tx.tupleCV({ 'to': tx.uintCV(2210), 'usda': tx.uintCV(81352) }),
tx.tupleCV({ 'to': tx.uintCV(2216), 'usda': tx.uintCV(340204) }),
tx.tupleCV({ 'to': tx.uintCV(2217), 'usda': tx.uintCV(51490) }),
tx.tupleCV({ 'to': tx.uintCV(2218), 'usda': tx.uintCV(33984) }),
tx.tupleCV({ 'to': tx.uintCV(2232), 'usda': tx.uintCV(27584) }),
tx.tupleCV({ 'to': tx.uintCV(2235), 'usda': tx.uintCV(643629) }),
tx.tupleCV({ 'to': tx.uintCV(2236), 'usda': tx.uintCV(919470) }),
tx.tupleCV({ 'to': tx.uintCV(2238), 'usda': tx.uintCV(2206727) }),
tx.tupleCV({ 'to': tx.uintCV(2240), 'usda': tx.uintCV(101142) }),
tx.tupleCV({ 'to': tx.uintCV(2243), 'usda': tx.uintCV(782296) }),
tx.tupleCV({ 'to': tx.uintCV(2244), 'usda': tx.uintCV(55168) }),
tx.tupleCV({ 'to': tx.uintCV(2245), 'usda': tx.uintCV(298828) }),
tx.tupleCV({ 'to': tx.uintCV(2249), 'usda': tx.uintCV(6267570) }),
tx.tupleCV({ 'to': tx.uintCV(2251), 'usda': tx.uintCV(91947) })
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-usda-yield-v2-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
