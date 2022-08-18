require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(1279), 'usda': tx.uintCV(213871848) }),
tx.tupleCV({ 'to': tx.uintCV(1293), 'usda': tx.uintCV(31617734) }),
tx.tupleCV({ 'to': tx.uintCV(1309), 'usda': tx.uintCV(11052617) }),
tx.tupleCV({ 'to': tx.uintCV(1310), 'usda': tx.uintCV(212571) }),
tx.tupleCV({ 'to': tx.uintCV(1329), 'usda': tx.uintCV(39399570) }),
tx.tupleCV({ 'to': tx.uintCV(1334), 'usda': tx.uintCV(10629) }),
tx.tupleCV({ 'to': tx.uintCV(1349), 'usda': tx.uintCV(406320) }),
tx.tupleCV({ 'to': tx.uintCV(1359), 'usda': tx.uintCV(5237348) }),
tx.tupleCV({ 'to': tx.uintCV(1370), 'usda': tx.uintCV(8407706) }),
tx.tupleCV({ 'to': tx.uintCV(1395), 'usda': tx.uintCV(248709) }),
tx.tupleCV({ 'to': tx.uintCV(1400), 'usda': tx.uintCV(9880853) }),
tx.tupleCV({ 'to': tx.uintCV(1404), 'usda': tx.uintCV(536772) }),
tx.tupleCV({ 'to': tx.uintCV(1410), 'usda': tx.uintCV(18170693) }),
tx.tupleCV({ 'to': tx.uintCV(1424), 'usda': tx.uintCV(425143) }),
tx.tupleCV({ 'to': tx.uintCV(1441), 'usda': tx.uintCV(627086) }),
tx.tupleCV({ 'to': tx.uintCV(1447), 'usda': tx.uintCV(21134327) }),
tx.tupleCV({ 'to': tx.uintCV(1453), 'usda': tx.uintCV(706371) }),
tx.tupleCV({ 'to': tx.uintCV(1492), 'usda': tx.uintCV(4251) }),
tx.tupleCV({ 'to': tx.uintCV(1502), 'usda': tx.uintCV(2194300) }),
tx.tupleCV({ 'to': tx.uintCV(1533), 'usda': tx.uintCV(1637781) }),
tx.tupleCV({ 'to': tx.uintCV(1543), 'usda': tx.uintCV(457029) }),
tx.tupleCV({ 'to': tx.uintCV(1547), 'usda': tx.uintCV(850286) }),
tx.tupleCV({ 'to': tx.uintCV(1574), 'usda': tx.uintCV(85029) }),
tx.tupleCV({ 'to': tx.uintCV(1576), 'usda': tx.uintCV(106286) }),
tx.tupleCV({ 'to': tx.uintCV(1581), 'usda': tx.uintCV(5445047) }),
tx.tupleCV({ 'to': tx.uintCV(1594), 'usda': tx.uintCV(1125304) }),
tx.tupleCV({ 'to': tx.uintCV(1598), 'usda': tx.uintCV(106286) }),
tx.tupleCV({ 'to': tx.uintCV(1601), 'usda': tx.uintCV(163680) }),
tx.tupleCV({ 'to': tx.uintCV(1604), 'usda': tx.uintCV(2136939) }),
tx.tupleCV({ 'to': tx.uintCV(1605), 'usda': tx.uintCV(2180001) }),
tx.tupleCV({ 'to': tx.uintCV(1622), 'usda': tx.uintCV(20399968) }),
tx.tupleCV({ 'to': tx.uintCV(1636), 'usda': tx.uintCV(1425918) }),
tx.tupleCV({ 'to': tx.uintCV(1643), 'usda': tx.uintCV(28436108) }),
tx.tupleCV({ 'to': tx.uintCV(1663), 'usda': tx.uintCV(425143) }),
tx.tupleCV({ 'to': tx.uintCV(1665), 'usda': tx.uintCV(11071912) }),
tx.tupleCV({ 'to': tx.uintCV(1673), 'usda': tx.uintCV(85029) }),
tx.tupleCV({ 'to': tx.uintCV(1674), 'usda': tx.uintCV(63771) }),
tx.tupleCV({ 'to': tx.uintCV(1675), 'usda': tx.uintCV(897051) }),
tx.tupleCV({ 'to': tx.uintCV(1676), 'usda': tx.uintCV(6950994) }),
tx.tupleCV({ 'to': tx.uintCV(1680), 'usda': tx.uintCV(552686) }),
tx.tupleCV({ 'to': tx.uintCV(1690), 'usda': tx.uintCV(25772) }),
tx.tupleCV({ 'to': tx.uintCV(1704), 'usda': tx.uintCV(6418080) }),
tx.tupleCV({ 'to': tx.uintCV(1803), 'usda': tx.uintCV(7554628) }),
tx.tupleCV({ 'to': tx.uintCV(1805), 'usda': tx.uintCV(1594286) }),
tx.tupleCV({ 'to': tx.uintCV(1809), 'usda': tx.uintCV(5420513) }),
tx.tupleCV({ 'to': tx.uintCV(1815), 'usda': tx.uintCV(31885713) }),
tx.tupleCV({ 'to': tx.uintCV(1828), 'usda': tx.uintCV(2916033) }),
tx.tupleCV({ 'to': tx.uintCV(1849), 'usda': tx.uintCV(31886) }),
tx.tupleCV({ 'to': tx.uintCV(1855), 'usda': tx.uintCV(106286) }),
tx.tupleCV({ 'to': tx.uintCV(1859), 'usda': tx.uintCV(21257) }),
tx.tupleCV({ 'to': tx.uintCV(1864), 'usda': tx.uintCV(350743) }),
tx.tupleCV({ 'to': tx.uintCV(1867), 'usda': tx.uintCV(2022481) }),
tx.tupleCV({ 'to': tx.uintCV(1873), 'usda': tx.uintCV(646962) }),
tx.tupleCV({ 'to': tx.uintCV(1875), 'usda': tx.uintCV(6409028) }),
tx.tupleCV({ 'to': tx.uintCV(1881), 'usda': tx.uintCV(212571) }),
tx.tupleCV({ 'to': tx.uintCV(1883), 'usda': tx.uintCV(23026835) }),
tx.tupleCV({ 'to': tx.uintCV(1886), 'usda': tx.uintCV(482212) }),
tx.tupleCV({ 'to': tx.uintCV(1895), 'usda': tx.uintCV(63771) }),
tx.tupleCV({ 'to': tx.uintCV(1900), 'usda': tx.uintCV(276343) }),
tx.tupleCV({ 'to': tx.uintCV(1906), 'usda': tx.uintCV(1734996) }),
tx.tupleCV({ 'to': tx.uintCV(1910), 'usda': tx.uintCV(7886818) }),
tx.tupleCV({ 'to': tx.uintCV(1923), 'usda': tx.uintCV(22541703) }),
tx.tupleCV({ 'to': tx.uintCV(1926), 'usda': tx.uintCV(3578429) }),
tx.tupleCV({ 'to': tx.uintCV(1933), 'usda': tx.uintCV(329979) }),
tx.tupleCV({ 'to': tx.uintCV(1957), 'usda': tx.uintCV(427383) }),
tx.tupleCV({ 'to': tx.uintCV(1958), 'usda': tx.uintCV(1080642) }),
tx.tupleCV({ 'to': tx.uintCV(1961), 'usda': tx.uintCV(8845686) }),
tx.tupleCV({ 'to': tx.uintCV(1971), 'usda': tx.uintCV(531429) }),
tx.tupleCV({ 'to': tx.uintCV(1973), 'usda': tx.uintCV(108058) }),
tx.tupleCV({ 'to': tx.uintCV(1976), 'usda': tx.uintCV(1288871) }),
tx.tupleCV({ 'to': tx.uintCV(1977), 'usda': tx.uintCV(1275429) }),
tx.tupleCV({ 'to': tx.uintCV(1982), 'usda': tx.uintCV(2673710) }),
tx.tupleCV({ 'to': tx.uintCV(1984), 'usda': tx.uintCV(2142387) }),
tx.tupleCV({ 'to': tx.uintCV(1990), 'usda': tx.uintCV(313094666) }),
tx.tupleCV({ 'to': tx.uintCV(1997), 'usda': tx.uintCV(214760) }),
tx.tupleCV({ 'to': tx.uintCV(2000), 'usda': tx.uintCV(21475972) }),
tx.tupleCV({ 'to': tx.uintCV(2004), 'usda': tx.uintCV(7012520) }),
tx.tupleCV({ 'to': tx.uintCV(2008), 'usda': tx.uintCV(25472085) }),
tx.tupleCV({ 'to': tx.uintCV(2009), 'usda': tx.uintCV(3658354) }),
tx.tupleCV({ 'to': tx.uintCV(2010), 'usda': tx.uintCV(7450974) }),
tx.tupleCV({ 'to': tx.uintCV(2011), 'usda': tx.uintCV(318857) }),
tx.tupleCV({ 'to': tx.uintCV(2018), 'usda': tx.uintCV(73562818) }),
tx.tupleCV({ 'to': tx.uintCV(2026), 'usda': tx.uintCV(532604) }),
tx.tupleCV({ 'to': tx.uintCV(2028), 'usda': tx.uintCV(129611790) }),
tx.tupleCV({ 'to': tx.uintCV(2029), 'usda': tx.uintCV(3715837) }),
tx.tupleCV({ 'to': tx.uintCV(2030), 'usda': tx.uintCV(85820) }),
tx.tupleCV({ 'to': tx.uintCV(2036), 'usda': tx.uintCV(5649178) }),
tx.tupleCV({ 'to': tx.uintCV(2037), 'usda': tx.uintCV(5647527) }),
tx.tupleCV({ 'to': tx.uintCV(2044), 'usda': tx.uintCV(171639) }),
tx.tupleCV({ 'to': tx.uintCV(2046), 'usda': tx.uintCV(1030971401) }),
tx.tupleCV({ 'to': tx.uintCV(2050), 'usda': tx.uintCV(1098706720) }),
tx.tupleCV({ 'to': tx.uintCV(2051), 'usda': tx.uintCV(2665610) }),
tx.tupleCV({ 'to': tx.uintCV(2060), 'usda': tx.uintCV(212571) }),
tx.tupleCV({ 'to': tx.uintCV(2061), 'usda': tx.uintCV(163085051) }),
tx.tupleCV({ 'to': tx.uintCV(2062), 'usda': tx.uintCV(11251924) }),
tx.tupleCV({ 'to': tx.uintCV(2063), 'usda': tx.uintCV(373185) }),
tx.tupleCV({ 'to': tx.uintCV(2064), 'usda': tx.uintCV(307968869) }),
tx.tupleCV({ 'to': tx.uintCV(2066), 'usda': tx.uintCV(7966111) }),
tx.tupleCV({ 'to': tx.uintCV(2094), 'usda': tx.uintCV(425143) }),
tx.tupleCV({ 'to': tx.uintCV(2095), 'usda': tx.uintCV(63975) }),
tx.tupleCV({ 'to': tx.uintCV(2097), 'usda': tx.uintCV(8382685) }),
tx.tupleCV({ 'to': tx.uintCV(2100), 'usda': tx.uintCV(1391975) }),
tx.tupleCV({ 'to': tx.uintCV(2104), 'usda': tx.uintCV(90342855) }),
tx.tupleCV({ 'to': tx.uintCV(2110), 'usda': tx.uintCV(2143536066) }),
tx.tupleCV({ 'to': tx.uintCV(2113), 'usda': tx.uintCV(36776761) }),
tx.tupleCV({ 'to': tx.uintCV(2118), 'usda': tx.uintCV(37881180) }),
tx.tupleCV({ 'to': tx.uintCV(2121), 'usda': tx.uintCV(14880000) }),
tx.tupleCV({ 'to': tx.uintCV(2123), 'usda': tx.uintCV(533122) }),
tx.tupleCV({ 'to': tx.uintCV(2127), 'usda': tx.uintCV(18176707) }),
tx.tupleCV({ 'to': tx.uintCV(2129), 'usda': tx.uintCV(15412618) }),
tx.tupleCV({ 'to': tx.uintCV(2130), 'usda': tx.uintCV(2300361) }),
tx.tupleCV({ 'to': tx.uintCV(2131), 'usda': tx.uintCV(17021971) }),
tx.tupleCV({ 'to': tx.uintCV(2132), 'usda': tx.uintCV(15957190) }),
tx.tupleCV({ 'to': tx.uintCV(2135), 'usda': tx.uintCV(2007406) }),
tx.tupleCV({ 'to': tx.uintCV(2139), 'usda': tx.uintCV(31024842) }),
tx.tupleCV({ 'to': tx.uintCV(2140), 'usda': tx.uintCV(2466367) }),
tx.tupleCV({ 'to': tx.uintCV(2179), 'usda': tx.uintCV(63958) }),
tx.tupleCV({ 'to': tx.uintCV(2183), 'usda': tx.uintCV(5024541) }),
tx.tupleCV({ 'to': tx.uintCV(2184), 'usda': tx.uintCV(2559276) }),
tx.tupleCV({ 'to': tx.uintCV(2185), 'usda': tx.uintCV(110537) }),
tx.tupleCV({ 'to': tx.uintCV(2187), 'usda': tx.uintCV(42639) }),
tx.tupleCV({ 'to': tx.uintCV(2190), 'usda': tx.uintCV(389006) }),
tx.tupleCV({ 'to': tx.uintCV(2191), 'usda': tx.uintCV(127543) }),
tx.tupleCV({ 'to': tx.uintCV(2192), 'usda': tx.uintCV(637714) }),
tx.tupleCV({ 'to': tx.uintCV(2195), 'usda': tx.uintCV(12511618) }),
tx.tupleCV({ 'to': tx.uintCV(2196), 'usda': tx.uintCV(1062857) }),
tx.tupleCV({ 'to': tx.uintCV(2198), 'usda': tx.uintCV(2125714) }),
tx.tupleCV({ 'to': tx.uintCV(2201), 'usda': tx.uintCV(212571) }),
tx.tupleCV({ 'to': tx.uintCV(2203), 'usda': tx.uintCV(2125714) }),
tx.tupleCV({ 'to': tx.uintCV(2205), 'usda': tx.uintCV(531429) }),
tx.tupleCV({ 'to': tx.uintCV(2207), 'usda': tx.uintCV(544183) }),
tx.tupleCV({ 'to': tx.uintCV(2210), 'usda': tx.uintCV(148800) }),
tx.tupleCV({ 'to': tx.uintCV(2212), 'usda': tx.uintCV(138171) }),
tx.tupleCV({ 'to': tx.uintCV(2216), 'usda': tx.uintCV(744000) }),
tx.tupleCV({ 'to': tx.uintCV(2217), 'usda': tx.uintCV(119040) }),
tx.tupleCV({ 'to': tx.uintCV(2218), 'usda': tx.uintCV(78566) })
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
