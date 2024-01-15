require('dotenv').config();
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const tx = require('@stacks/transactions');
const utils = require('./utils');
const network = utils.resolveNetwork();
const BN = require('bn.js');

async function transact() {
  const list = tx.listCV([
    tx.tupleCV({ 'to': tx.uintCV(2305), 'usda': tx.uintCV(201501674) }),
    tx.tupleCV({ 'to': tx.uintCV(2315), 'usda': tx.uintCV(2881961537) }),
    tx.tupleCV({ 'to': tx.uintCV(2317), 'usda': tx.uintCV(502091629) }),
    tx.tupleCV({ 'to': tx.uintCV(2320), 'usda': tx.uintCV(53213487) }),
    tx.tupleCV({ 'to': tx.uintCV(2322), 'usda': tx.uintCV(66502) }),
    tx.tupleCV({ 'to': tx.uintCV(2324), 'usda': tx.uintCV(12307615) }),
    tx.tupleCV({ 'to': tx.uintCV(2334), 'usda': tx.uintCV(173496232) }),
    tx.tupleCV({ 'to': tx.uintCV(2358), 'usda': tx.uintCV(12773516) }),
    tx.tupleCV({ 'to': tx.uintCV(2361), 'usda': tx.uintCV(133004) }),
    tx.tupleCV({ 'to': tx.uintCV(2362), 'usda': tx.uintCV(1635954) }),
    tx.tupleCV({ 'to': tx.uintCV(2365), 'usda': tx.uintCV(219457) }),
    tx.tupleCV({ 'to': tx.uintCV(2376), 'usda': tx.uintCV(735647) }),
    tx.tupleCV({ 'to': tx.uintCV(2377), 'usda': tx.uintCV(139831220) }),
    tx.tupleCV({ 'to': tx.uintCV(2381), 'usda': tx.uintCV(2068817) }),
    tx.tupleCV({ 'to': tx.uintCV(2393), 'usda': tx.uintCV(6987152) }),
    tx.tupleCV({ 'to': tx.uintCV(2399), 'usda': tx.uintCV(26287883) }),
    tx.tupleCV({ 'to': tx.uintCV(2417), 'usda': tx.uintCV(66502) }),
    tx.tupleCV({ 'to': tx.uintCV(2431), 'usda': tx.uintCV(1751002994) }),
    tx.tupleCV({ 'to': tx.uintCV(2443), 'usda': tx.uintCV(303725805) }),
    tx.tupleCV({ 'to': tx.uintCV(2448), 'usda': tx.uintCV(84086824) }),
    tx.tupleCV({ 'to': tx.uintCV(2451), 'usda': tx.uintCV(67998502) }),
    tx.tupleCV({ 'to': tx.uintCV(2453), 'usda': tx.uintCV(99755715) }),
    tx.tupleCV({ 'to': tx.uintCV(2462), 'usda': tx.uintCV(26601981) }),
    tx.tupleCV({ 'to': tx.uintCV(2466), 'usda': tx.uintCV(101598279) }),
    tx.tupleCV({ 'to': tx.uintCV(2468), 'usda': tx.uintCV(695795) }),
    tx.tupleCV({ 'to': tx.uintCV(2476), 'usda': tx.uintCV(46553376) }),
    tx.tupleCV({ 'to': tx.uintCV(2477), 'usda': tx.uintCV(23276871) }),
    tx.tupleCV({ 'to': tx.uintCV(2480), 'usda': tx.uintCV(229924616) }),
    tx.tupleCV({ 'to': tx.uintCV(2483), 'usda': tx.uintCV(332511) }),
    tx.tupleCV({ 'to': tx.uintCV(2485), 'usda': tx.uintCV(494111365) }),
    tx.tupleCV({ 'to': tx.uintCV(2486), 'usda': tx.uintCV(11305374) }),
    tx.tupleCV({ 'to': tx.uintCV(2495), 'usda': tx.uintCV(9543066) }),
    tx.tupleCV({ 'to': tx.uintCV(2511), 'usda': tx.uintCV(21746220) }),
    tx.tupleCV({ 'to': tx.uintCV(2518), 'usda': tx.uintCV(66502) }),
    tx.tupleCV({ 'to': tx.uintCV(2526), 'usda': tx.uintCV(66502203) }),
    tx.tupleCV({ 'to': tx.uintCV(2527), 'usda': tx.uintCV(731524) }),
    tx.tupleCV({ 'to': tx.uintCV(2531), 'usda': tx.uintCV(66502203) }),
    tx.tupleCV({ 'to': tx.uintCV(2532), 'usda': tx.uintCV(1064035) }),
    tx.tupleCV({ 'to': tx.uintCV(2533), 'usda': tx.uintCV(40193931) }),
    tx.tupleCV({ 'to': tx.uintCV(2534), 'usda': tx.uintCV(75632) }),
    tx.tupleCV({ 'to': tx.uintCV(2535), 'usda': tx.uintCV(66502) }),
    tx.tupleCV({ 'to': tx.uintCV(2536), 'usda': tx.uintCV(2128070) }),
    tx.tupleCV({ 'to': tx.uintCV(2540), 'usda': tx.uintCV(48596) }),
    tx.tupleCV({ 'to': tx.uintCV(2541), 'usda': tx.uintCV(80944) }),
    tx.tupleCV({ 'to': tx.uintCV(2542), 'usda': tx.uintCV(304314079) }),
    tx.tupleCV({ 'to': tx.uintCV(2544), 'usda': tx.uintCV(266009) }),
    tx.tupleCV({ 'to': tx.uintCV(2545), 'usda': tx.uintCV(19950661) }),
    tx.tupleCV({ 'to': tx.uintCV(2546), 'usda': tx.uintCV(31721551) }),
    tx.tupleCV({ 'to': tx.uintCV(2547), 'usda': tx.uintCV(332511) }),
    tx.tupleCV({ 'to': tx.uintCV(2548), 'usda': tx.uintCV(332511) }),
    tx.tupleCV({ 'to': tx.uintCV(2549), 'usda': tx.uintCV(79033341) }),
    tx.tupleCV({ 'to': tx.uintCV(2551), 'usda': tx.uintCV(5559584) }),
    tx.tupleCV({ 'to': tx.uintCV(2552), 'usda': tx.uintCV(196027) }),
    tx.tupleCV({ 'to': tx.uintCV(2555), 'usda': tx.uintCV(3105883) }),
    tx.tupleCV({ 'to': tx.uintCV(2556), 'usda': tx.uintCV(1130537) }),
    tx.tupleCV({ 'to': tx.uintCV(2557), 'usda': tx.uintCV(9975330) }),
    tx.tupleCV({ 'to': tx.uintCV(2558), 'usda': tx.uintCV(19950661) }),
    tx.tupleCV({ 'to': tx.uintCV(2559), 'usda': tx.uintCV(199506608) }),
    tx.tupleCV({ 'to': tx.uintCV(2560), 'usda': tx.uintCV(33251101) }),
    tx.tupleCV({ 'to': tx.uintCV(2562), 'usda': tx.uintCV(10208088) }),
    tx.tupleCV({ 'to': tx.uintCV(2564), 'usda': tx.uintCV(450992) }),
    tx.tupleCV({ 'to': tx.uintCV(2565), 'usda': tx.uintCV(1330044) }),
    tx.tupleCV({ 'to': tx.uintCV(2566), 'usda': tx.uintCV(29792987) }),
    tx.tupleCV({ 'to': tx.uintCV(2567), 'usda': tx.uintCV(6650220) }),
    tx.tupleCV({ 'to': tx.uintCV(2568), 'usda': tx.uintCV(166256) }),
    tx.tupleCV({ 'to': tx.uintCV(2570), 'usda': tx.uintCV(19951) }),
    tx.tupleCV({ 'to': tx.uintCV(2571), 'usda': tx.uintCV(13300) }),
    tx.tupleCV({ 'to': tx.uintCV(2572), 'usda': tx.uintCV(2444579) }),
    tx.tupleCV({ 'to': tx.uintCV(2573), 'usda': tx.uintCV(99753304) }),
    tx.tupleCV({ 'to': tx.uintCV(2574), 'usda': tx.uintCV(126354185) }),
    tx.tupleCV({ 'to': tx.uintCV(2575), 'usda': tx.uintCV(200836652) }),
    tx.tupleCV({ 'to': tx.uintCV(2576), 'usda': tx.uintCV(2823737) }),
    tx.tupleCV({ 'to': tx.uintCV(2577), 'usda': tx.uintCV(3325110) }),
    tx.tupleCV({ 'to': tx.uintCV(2579), 'usda': tx.uintCV(465515) }),
    tx.tupleCV({ 'to': tx.uintCV(2580), 'usda': tx.uintCV(571919) }),
    tx.tupleCV({ 'to': tx.uintCV(2581), 'usda': tx.uintCV(133004) }),
    tx.tupleCV({ 'to': tx.uintCV(2582), 'usda': tx.uintCV(1332508) }),
    tx.tupleCV({ 'to': tx.uintCV(2584), 'usda': tx.uintCV(13300441) }),
    tx.tupleCV({ 'to': tx.uintCV(2585), 'usda': tx.uintCV(2327577) }),
    tx.tupleCV({ 'to': tx.uintCV(2586), 'usda': tx.uintCV(388895) }),
    tx.tupleCV({ 'to': tx.uintCV(2587), 'usda': tx.uintCV(299259912) }),
    tx.tupleCV({ 'to': tx.uintCV(2588), 'usda': tx.uintCV(133004) }),
    tx.tupleCV({ 'to': tx.uintCV(2589), 'usda': tx.uintCV(665022) }),
    tx.tupleCV({ 'to': tx.uintCV(2590), 'usda': tx.uintCV(8645286) }),
    tx.tupleCV({ 'to': tx.uintCV(2591), 'usda': tx.uintCV(1330044) }),
    tx.tupleCV({ 'to': tx.uintCV(2593), 'usda': tx.uintCV(864529) }),
    tx.tupleCV({ 'to': tx.uintCV(2594), 'usda': tx.uintCV(199507) }),
    tx.tupleCV({ 'to': tx.uintCV(2596), 'usda': tx.uintCV(154285110) }),
    tx.tupleCV({ 'to': tx.uintCV(2597), 'usda': tx.uintCV(221452335) }),
    tx.tupleCV({ 'to': tx.uintCV(2598), 'usda': tx.uintCV(266009) })
  ]);
  const txOptions = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: 'arkadiko-claim-usda-yield-v2-1',
    functionName: 'add-claims',
    functionArgs: [list],
    senderKey: process.env.STACKS_PRIVATE_KEY,
    fee: new BN(1000000, 10),
    postConditionMode: 1,
    network
  };

  const transaction = await tx.makeContractCall(txOptions);
  const result = tx.broadcastTransaction(transaction, network);
  await utils.processing(result, transaction.txid(), 0);
};

transact();
