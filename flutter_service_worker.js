'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "af20fd84dff58d334c9ab42083267c29",
"assets/flag/res/flag/a.txt": "b5a3499a576030c8f27bb27b77efe113",
"assets/flag/res/flag/ad.svg": "6a14dcd1af407b41e8921b9bc6c90e32",
"assets/flag/res/flag/ae.svg": "8ae6708cbab0fe2eeddb8152d87e302c",
"assets/flag/res/flag/af.svg": "056c4dbcaf56932bee246bb751309c9f",
"assets/flag/res/flag/ag.svg": "0538fa90e8ba12bad017f05975aa0841",
"assets/flag/res/flag/al.svg": "9ca1e7c55a76c6f0c5b34c29ed911c8f",
"assets/flag/res/flag/am.svg": "69727bec1f2a92340d3a6822131ffc23",
"assets/flag/res/flag/ao.svg": "ea0a59870bfb372f25c6f56271eb6808",
"assets/flag/res/flag/ar.svg": "2236d9b396c4475234b1f050758631b9",
"assets/flag/res/flag/at.svg": "0d38e4d825bb3176af4507d2bdf60eba",
"assets/flag/res/flag/au.svg": "ac7ddacad338b6d1074f8b0d2e6fd2ac",
"assets/flag/res/flag/az.svg": "d1c6ff3d2c6137ed6dc59deff9ca1795",
"assets/flag/res/flag/ba.svg": "38a248a0da355ec7d6591e67489ed08b",
"assets/flag/res/flag/bb.svg": "68cbe43424c89d45c4d06fda5195fdcd",
"assets/flag/res/flag/bd.svg": "73c177e4545c26b844551aa8038970b0",
"assets/flag/res/flag/be.svg": "df57b33ad7b80d3b04a92c263130d26e",
"assets/flag/res/flag/bf.svg": "8c9b84ac3c7851f2e34ab4935f33397e",
"assets/flag/res/flag/bg.svg": "e3e193057e741aaeb9486d0af77f8f8b",
"assets/flag/res/flag/bh.svg": "30728ffe1993377df3a9fc5f6fc42713",
"assets/flag/res/flag/bi.svg": "1a2bcfb909091ebc0c6d3fea31eef993",
"assets/flag/res/flag/bj.svg": "203c8d481e7303757026d65cf6a1e43f",
"assets/flag/res/flag/bn.svg": "82577bde2a2f18a74bece06113782219",
"assets/flag/res/flag/bo.svg": "1bc18cd73405b56c1f6ee39d059b3961",
"assets/flag/res/flag/br.svg": "248da95ef49cb528b8ef16e4b2dc36d9",
"assets/flag/res/flag/bs.svg": "5d04b31e6259544bb975cdc259c32551",
"assets/flag/res/flag/bt.svg": "ce4684f240e15637d2c67eb222d63fe5",
"assets/flag/res/flag/bw.svg": "f9750ef2e25bda43bdd29b454b9e32ca",
"assets/flag/res/flag/by.svg": "46f88d7e094f95ce28a74b570bb5e395",
"assets/flag/res/flag/bz.svg": "6f7fb09570637e205ebd010e6b0a70c4",
"assets/flag/res/flag/ca.svg": "6cafa17d9715922ebb496b6384cc1541",
"assets/flag/res/flag/cd.svg": "ed47822b634dfe5707d57321a76f13ab",
"assets/flag/res/flag/cf.svg": "66eaa7d7fa8434f3966af11188be0028",
"assets/flag/res/flag/cg.svg": "5911439801b0aa84bcb9f67d90c4ed89",
"assets/flag/res/flag/ch.svg": "69547e25f5fe58a8b78777dc82725e04",
"assets/flag/res/flag/ci.svg": "9996d349c36e0856832977d6b70ae09c",
"assets/flag/res/flag/cl.svg": "11f7f79f090e3ee5fd8763722af3a99c",
"assets/flag/res/flag/cm.svg": "e48da92d4f4f63eb91152ca126cedc8b",
"assets/flag/res/flag/cn.svg": "9caece66507768334f68bc3ec25e5ceb",
"assets/flag/res/flag/co.svg": "230d6931448dc893671ff6a59e6fb753",
"assets/flag/res/flag/cr.svg": "b6d92c95d7229492a298cf3631f8f368",
"assets/flag/res/flag/cu.svg": "3e5f9c8b3f8b7173d008e5cfd1682418",
"assets/flag/res/flag/cv.svg": "66a51943bb7c8560ccaa06b955ea3ce6",
"assets/flag/res/flag/cy.svg": "135c77a66ab99f0e5b41be14b4f8d4c1",
"assets/flag/res/flag/cz.svg": "9c5898c620005bd48fed5f3ea9210894",
"assets/flag/res/flag/de.svg": "85f98c37ca46ee50b5c8ba121baacf2d",
"assets/flag/res/flag/dj.svg": "3c879837e330f212b02669fd5cb1485f",
"assets/flag/res/flag/dk.svg": "07be12773c9bacc7883f41cf806ad7e5",
"assets/flag/res/flag/dm.svg": "815a2329fc6db449afed64d280c0ccea",
"assets/flag/res/flag/do.svg": "68cc45c8b6a1d9f2d900782c017aca56",
"assets/flag/res/flag/dz.svg": "daeb5108dcabc9e00e731ee40e546b40",
"assets/flag/res/flag/ec.svg": "94317befb597bfc7cbe5a664dbe34afd",
"assets/flag/res/flag/ee.svg": "8665c242c58dc75c99b4e1e46e607b39",
"assets/flag/res/flag/eg.svg": "98f7dcbe7af8749848ba688e9fc1af2c",
"assets/flag/res/flag/eh.svg": "450b4000426c7799a5648da3e7a0cc96",
"assets/flag/res/flag/er.svg": "67f5cd294f998bb172bd8c6e702c411c",
"assets/flag/res/flag/es.svg": "e511dceedff1a2f71233ed3907c73199",
"assets/flag/res/flag/et.svg": "120ea455502dbaa6dffe199a6b589e8b",
"assets/flag/res/flag/eu.svg": "9491b689ec6a5a12ca42ec1096568b80",
"assets/flag/res/flag/fi.svg": "a814e980a8184e1efa297d90d6284c4c",
"assets/flag/res/flag/fj.svg": "4541ca5ba2cd691b30245e7d5a2d9d7b",
"assets/flag/res/flag/fm.svg": "cfc3756759f4002983b49217456fc8e4",
"assets/flag/res/flag/fr.svg": "2f9befe94ef9076d58b0a2ae38e1a025",
"assets/flag/res/flag/ga.svg": "4544cd0bb3faf33f633ddb36b134b8f8",
"assets/flag/res/flag/gb.svg": "68b4d8305c4f90577e6357bb0c247d29",
"assets/flag/res/flag/gd.svg": "84b1ac78a6e909f7244d56c7a7b5f17d",
"assets/flag/res/flag/ge.svg": "c9a85b6eea715acb3d71c35aa913b6ec",
"assets/flag/res/flag/gh.svg": "7d6d7a831497ce467b888fbba4cf7d21",
"assets/flag/res/flag/gm.svg": "51399c19982b57b330c58dbae394d5c7",
"assets/flag/res/flag/gn.svg": "a783ea888c06b7d64cf5bcd08ef20ad8",
"assets/flag/res/flag/gq.svg": "8be10c943b439a856aad59ab88fdab64",
"assets/flag/res/flag/gr.svg": "b41b5f52dd7dbffc35801da4400b0cd5",
"assets/flag/res/flag/gt.svg": "c79e10d99aee6f0f66c9d2907075a7bd",
"assets/flag/res/flag/gw.svg": "6c1ff733c39d9e4e76f0eb9a0f269c7c",
"assets/flag/res/flag/gy.svg": "3d50da7f6eff25385a33bd1c0cab7fbe",
"assets/flag/res/flag/hk.svg": "bcd1bda531d3d568826424f779dab941",
"assets/flag/res/flag/hn.svg": "81ab9078acf460af828739861f250713",
"assets/flag/res/flag/hr.svg": "3e56776d23fdd54b4ed116481dd19d2b",
"assets/flag/res/flag/ht.svg": "93c514d3d908f86d524e68b65ea333ac",
"assets/flag/res/flag/hu.svg": "2e0e3e500ac9a0f691900d3e27c6e8b2",
"assets/flag/res/flag/id.svg": "e9b657b839dba5a312c5ea243cf43c3d",
"assets/flag/res/flag/ie.svg": "4a6b333e1b344bd04ee59f19fbd4abaa",
"assets/flag/res/flag/il.svg": "71dbb46044e8f441aad32fb9a91f8436",
"assets/flag/res/flag/in.svg": "7a482fd38133dd2ac91dbb7a0cfc51c6",
"assets/flag/res/flag/iq.svg": "f7890d3258ca62b7efcedf3f4aae3751",
"assets/flag/res/flag/ir.svg": "6d32f5794b10d03a50057b8fd5ecea46",
"assets/flag/res/flag/is.svg": "1310d11c16a0a3ad8bbec39084d98d6a",
"assets/flag/res/flag/it.svg": "41b03921340062a6a1727eb440d19a8b",
"assets/flag/res/flag/jm.svg": "684650029f9dad09d779663fcb809282",
"assets/flag/res/flag/jo.svg": "34d7eca815fff085db34d0e97ef84ac3",
"assets/flag/res/flag/jp.svg": "a1e1ea513a3fcd801e85db4373ce8cd6",
"assets/flag/res/flag/ke.svg": "aa572e0e7ad47c23e37633f1b370da8d",
"assets/flag/res/flag/kg.svg": "c08e9251ab996b005655d6b5c56f4115",
"assets/flag/res/flag/kh.svg": "6e722bc2d4535eb7655d4f8f95ad90be",
"assets/flag/res/flag/ki.svg": "64cf951cfc4bcec910b2d5911dcf78b4",
"assets/flag/res/flag/km.svg": "6d07496344175e577266949b2833b0c3",
"assets/flag/res/flag/kn.svg": "1ab2d7d4d373306c4d9ffdca79c80128",
"assets/flag/res/flag/kp.svg": "a9f988e5c3b8644f1555b6830600581c",
"assets/flag/res/flag/kr.svg": "b62df313096b2d0205e937926db159a5",
"assets/flag/res/flag/kw.svg": "0887d9941c4f694048087ec864fcc7ef",
"assets/flag/res/flag/kz.svg": "0fe9097bba1cc582f03d6b845bea512a",
"assets/flag/res/flag/la.svg": "b76f93a9d626679c2aed426bc3fcd758",
"assets/flag/res/flag/lb.svg": "db1d8d6564dba6e1babeb04983a2b4d5",
"assets/flag/res/flag/lc.svg": "e094620d44bd68ca32fd104d474028fb",
"assets/flag/res/flag/li.svg": "071b1d57a0ece6b2b738a3de7dfd0ccd",
"assets/flag/res/flag/lk.svg": "faa1949523b46e9f67c4cbac775a0cbc",
"assets/flag/res/flag/lr.svg": "177182a8e32845d6535283ebae12b9ea",
"assets/flag/res/flag/ls.svg": "f9ff2c953a4d9fb2b68876ae6c684152",
"assets/flag/res/flag/lt.svg": "f81172011b0b0fd8f95db12e196458f6",
"assets/flag/res/flag/lu.svg": "4e06269e2a86d334d7185881d21a298f",
"assets/flag/res/flag/lv.svg": "9fa6c690c05867c2240c179909de5f85",
"assets/flag/res/flag/ly.svg": "592a5116d907a28ce6a435bf71899c20",
"assets/flag/res/flag/ma.svg": "7e55bd5403440cc1d3e17652420571e3",
"assets/flag/res/flag/mc.svg": "3d1d95bfa7445052d8173a5722f8de6e",
"assets/flag/res/flag/md.svg": "7e4c0d86dcf33627148f9cd67bee6b51",
"assets/flag/res/flag/me.svg": "d8e4f69a717279564d11c383372db23c",
"assets/flag/res/flag/mg.svg": "65482ca562875ff1337f0cccbdaa46ce",
"assets/flag/res/flag/mh.svg": "15e740f7d94caa54c706b3da4a14545e",
"assets/flag/res/flag/mk.svg": "93c15186533262b4a99e531c484d4459",
"assets/flag/res/flag/ml.svg": "12f23b6b05cc66725e2374f8dc78f5c0",
"assets/flag/res/flag/mm.svg": "2d22272029a2d705b4cd5c0a4895ef16",
"assets/flag/res/flag/mn.svg": "39bcb3ef04696298430ca84b7ff2d6fa",
"assets/flag/res/flag/mo.svg": "79d90d7e3778c5c2c7d4d5f887d53bb1",
"assets/flag/res/flag/mr.svg": "e12cbc42ed04c6a1ae1bbe8cfa185029",
"assets/flag/res/flag/mt.svg": "dcb55d4236b9977a909882974a12e924",
"assets/flag/res/flag/mu.svg": "139f91a3aebd9bb7f8d15aa0a996a5ff",
"assets/flag/res/flag/mv.svg": "dd23d9966716c14519286a72ca9308ca",
"assets/flag/res/flag/mw.svg": "6ae05cd68db4fdec0c31f4eeaca3d7d7",
"assets/flag/res/flag/mx.svg": "b4d928c17dfc94c56858c3da56e94188",
"assets/flag/res/flag/my.svg": "417cba3cc8c4121cf0d2250fd5c9697b",
"assets/flag/res/flag/mz.svg": "bc33186e77bd479f472c214c1e5de5d5",
"assets/flag/res/flag/na.svg": "a830d0864b6aa393b629c1baa5246d2a",
"assets/flag/res/flag/ne.svg": "0c4322271e2aecc54aec87a8935228f0",
"assets/flag/res/flag/ng.svg": "6fea46bec5cbabaf3502436889e93ca0",
"assets/flag/res/flag/ni.svg": "90df73abfa958b37c5f1a041938826c3",
"assets/flag/res/flag/nl.svg": "e53fc83f569b904b5b883c87a37b5607",
"assets/flag/res/flag/no.svg": "4b57a28e497b81a0fb3063015dfbe800",
"assets/flag/res/flag/np.svg": "0e7b6b2545dc384690c597aa1db4d1c8",
"assets/flag/res/flag/nr.svg": "2526a443e0f48c0a8ee7c3314bf15f85",
"assets/flag/res/flag/nz.svg": "7d1ea3d5c1fee2c14d81152169da672b",
"assets/flag/res/flag/om.svg": "c7dcd8ebb9ad2dbdf06fe5bd0d9b0f41",
"assets/flag/res/flag/pa.svg": "1a65c4313238fbc4b8cfbce75172a24f",
"assets/flag/res/flag/pe.svg": "23f4fbf5e318c51dcdd76271c0c6604a",
"assets/flag/res/flag/pg.svg": "d2ad188348d575dd628d65efef4b94ee",
"assets/flag/res/flag/ph.svg": "21edfa6742a6843aacaff53b937e5c15",
"assets/flag/res/flag/pk.svg": "52975d36167e1ad68ecd379b6854530e",
"assets/flag/res/flag/pl.svg": "aa3ad8a9daa8ec9d6018955708fe5737",
"assets/flag/res/flag/ps.svg": "77872242acfe696929d9a56b55748709",
"assets/flag/res/flag/pt.svg": "8399d871b0102e3df032cc9f69ca06aa",
"assets/flag/res/flag/pw.svg": "2104cf16e5d8b2927269348f649b641f",
"assets/flag/res/flag/py.svg": "8156f5f7586b7d92c0fb46aeda70ce68",
"assets/flag/res/flag/qa.svg": "1dcd82370d3912273a15c26d264400fd",
"assets/flag/res/flag/ro.svg": "15da9998583a8bece6fd90bf201b310e",
"assets/flag/res/flag/rs.svg": "74b32a84deba1c68326d0aad4173f7ec",
"assets/flag/res/flag/ru.svg": "7a8b3a7d8204983d246e6edbcbe21413",
"assets/flag/res/flag/rw.svg": "559f166d947d2e7b4e0d4bb426d6632b",
"assets/flag/res/flag/sa.svg": "c9373219b085ed5791458bf23a7aa361",
"assets/flag/res/flag/sb.svg": "79392615aa0527d6d741de6742d0a811",
"assets/flag/res/flag/sc.svg": "90c9327b714637cdf6c46586068d1f45",
"assets/flag/res/flag/sd.svg": "a53d817395b239599901627a36a6a335",
"assets/flag/res/flag/se.svg": "97ce2d679f8d8ede50153b91124cd264",
"assets/flag/res/flag/sg.svg": "2d6223aec3513bb057ed8540b2dae40a",
"assets/flag/res/flag/si.svg": "d718e9d1b5dedd27e4114371fd00dd80",
"assets/flag/res/flag/sk.svg": "a63549e8450fff840984650a9b0c5a64",
"assets/flag/res/flag/sl.svg": "7755f12e8da38a69f6347c901557b429",
"assets/flag/res/flag/sm.svg": "16dab5ad5a24fc6af779439d1ef21724",
"assets/flag/res/flag/sn.svg": "4db98c0bbb98adc9ae3d8fd689a97600",
"assets/flag/res/flag/so.svg": "6e5f13371514efbf71ddfdcc5eaa2c14",
"assets/flag/res/flag/sr.svg": "6905244b5370ff2cc10d5420affa03f6",
"assets/flag/res/flag/ss.svg": "de6a14955a3a56cdfb032bd70c0c8a0d",
"assets/flag/res/flag/st.svg": "f48819e95d956ddbcb37a7be63f56faa",
"assets/flag/res/flag/sv.svg": "1b29ca9e5a0b70bc2be8c55423c891c7",
"assets/flag/res/flag/sy.svg": "d8e896be0dd656174ccb831f6b42a997",
"assets/flag/res/flag/sz.svg": "609860b29fbc32697847b72b40c3feba",
"assets/flag/res/flag/td.svg": "8812ba91dbffba55946efdba3b2569d7",
"assets/flag/res/flag/tg.svg": "5e565ac50245c96dfd9f9753e11a64e5",
"assets/flag/res/flag/th.svg": "e7f18a5477d4f250f136c54ce56f7081",
"assets/flag/res/flag/tj.svg": "c8b3c4946503ec9a6e6d9a251ced60d4",
"assets/flag/res/flag/tl.svg": "f34c9a0193bb410985e04f4ba8e8d415",
"assets/flag/res/flag/tm.svg": "c7bf7db7254400133131a7b4b2552828",
"assets/flag/res/flag/tn.svg": "179c4fc6765bf7369d8136ae3986e517",
"assets/flag/res/flag/to.svg": "f4d05f56b92d182344f767567eb17211",
"assets/flag/res/flag/tr.svg": "2254e9c06c40bfac15d3fb9ddf2421e5",
"assets/flag/res/flag/tt.svg": "30180834dc0602f19f8dd332b3e027f9",
"assets/flag/res/flag/tv.svg": "7dbc961e1a282d5760cc7d3cd321b30f",
"assets/flag/res/flag/tw.svg": "45ef6b6922fc468e4d1bd12153b0e050",
"assets/flag/res/flag/tz.svg": "5ec3b115b6f327284a2414d7ec3f5a9b",
"assets/flag/res/flag/ua.svg": "1aeecd60c245f84d7db8bd634f0e870b",
"assets/flag/res/flag/ug.svg": "a3dccd48c0aa42614749ff9dcca8be6c",
"assets/flag/res/flag/us.svg": "ad5dff63fcfd4539295434c0013c3afa",
"assets/flag/res/flag/uy.svg": "f639e12989ff9aa7bbfb4ed47fa8ae8a",
"assets/flag/res/flag/uz.svg": "f0eb4284776fa1378666495d136303b3",
"assets/flag/res/flag/va.svg": "e9c2506a920cce4e36ee5aeb5573a7f9",
"assets/flag/res/flag/vc.svg": "2cc0562abbb0a32483c12d29fa0ad79f",
"assets/flag/res/flag/ve.svg": "d6be56f106bf5454a6555518aaf3c1e0",
"assets/flag/res/flag/vn.svg": "cc2e55f0f5f8b70997ac88191a8561e6",
"assets/flag/res/flag/vu.svg": "f0b65910f246ae5cbecedc933029f482",
"assets/flag/res/flag/ws.svg": "69b52e9a76c73fc5ea231fb5a1499b1e",
"assets/flag/res/flag/xk.svg": "af02b9e4d3da01c09359aa23c7ceef74",
"assets/flag/res/flag/ye.svg": "209af6bf0b2f47057aab72bd0392d6f4",
"assets/flag/res/flag/za.svg": "8f50c35985eab084114711cad6776eb6",
"assets/flag/res/flag/zm.svg": "4bd901a04f4821e61fc158e3c28d09a6",
"assets/flag/res/flag/zw.svg": "227d02aa1aa0f29e691ad7566b7c9521",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/gifs/animal.gif": "fb66831925abb9f952e7d41063ad3fa6",
"assets/gifs/baby1.gif": "3d4548142eba7cd2924aaa3b08ce44e3",
"assets/gifs/baby2.gif": "9170b6d4bfcc38c16b7403eba187ec1b",
"assets/gifs/castaway.gif": "25ba2e824a8fbb9c72856b8d51e7abbc",
"assets/gifs/dicaprio.gif": "bcc219933536ab6980f01f6b6bd05e25",
"assets/gifs/dog.gif": "447c9e570da08afd537a82d8f180f061",
"assets/gifs/eisb.gif": "c9522e489cce658d08194147abaa004c",
"assets/gifs/fatguy.gif": "6dec213afc3e7ee7a1345e4a96d3249e",
"assets/gifs/girl1.gif": "a5e962308706c1967778f5634edec088",
"assets/gifs/girl2.gif": "e0760f97fd6cc1dfd4de871bb9340925",
"assets/gifs/girl3.gif": "74bcdd4ee6510a943188f3dcc43409ee",
"assets/gifs/guy1.gif": "f2028985c2c21b0d3417008bbe2353e6",
"assets/gifs/guy2.gif": "93ea6128f7ef62977401648d35495e79",
"assets/gifs/monkey.gif": "20d3ce5f5137daa0bffa56a90d1948ca",
"assets/gifs/secretary.gif": "aba126d060cc38b06c7e14f2bab8436a",
"assets/gifs/skelett.gif": "f30fcf867f6afddde9744124c48538db",
"assets/gifs/swimmer.gif": "b53e0954ae49d402180360cf4f01baf6",
"assets/gifs/tier.gif": "21926f0c39647b902f9095219758f774",
"assets/gifs/wrestler.gif": "af997530d860bb4642b398a3cf5e1fad",
"assets/gifs/zombie.gif": "8dc611b09e6c410f071aee3ed881b1f4",
"assets/images/admin.jpg": "676bdbd790caadca795b51f8d6da4cd9",
"assets/images/apple.png": "a2b3b9152d4fd74986b9844448505512",
"assets/images/apple_logo_bw.png": "9fd4db225fb7e8dc728f9821ff2c23d2",
"assets/images/BP6.png": "fddca65d6be8b76dba826c10d923d997",
"assets/images/BP6_bw.png": "27b045651f3e75a6c5cd9c2998eca10a",
"assets/images/BP6_trans2.png": "7ebbe6eb1b6689a9b9890ae14f9a4407",
"assets/images/BP6_trans_white.png": "0705413df460f8f59ee3d48d98a6b4ba",
"assets/images/BP6_w.png": "39ded1130474daac025642e681f43f65",
"assets/images/facebook_logo.png": "911bdde808bb3cb83287fd70508ffc63",
"assets/images/gameTo10.jpg": "0ca5b8c929e9b1b0d9a13b48189abe20",
"assets/images/gameTo6.jpg": "2d6950f688d096bbf4de1170bea418c7",
"assets/images/google.png": "2e9032edd01424ae3621eea7452e7981",
"assets/images/google_logo.png": "df7263045f06484ab7470dfd84e86004",
"assets/images/k-pro.jpg": "7f7d7ce1710f7fc510c049573cd5b61f",
"assets/images/k0.jpg": "8a635ae9a26020d9a2a53cd4f87bea3a",
"assets/images/k1.jpg": "def68855d631308a3dc5bfc317a79495",
"assets/images/k10.jpg": "e0bf432192b84e15abe86c4fad352f08",
"assets/images/k11.jpg": "961e2ca6800a2bd8771db207866d0fef",
"assets/images/k12.jpg": "39af44533868e886a3f1a20670da20ec",
"assets/images/k13.jpg": "4c67495bb7d6f21b9fa2dfc18ae7935a",
"assets/images/k14.jpg": "08a033861f5681b2b4207d9e34ad752b",
"assets/images/k15.jpg": "f8f550b9e7f9b203d9a9c5499a20bd40",
"assets/images/k16.jpg": "c5eb49f48919e4e844682cca9d0fa6fd",
"assets/images/k17.jpg": "754824634ac1b3cb4824a11edf6fc7b3",
"assets/images/k18.jpg": "c67d4e842c5146a0e3db895562fa712f",
"assets/images/k2.jpg": "dda827238d0b25aba505a06c77cd9b28",
"assets/images/k3.jpg": "bc77583f77265520bd92752d43cccf70",
"assets/images/k33.jpg": "9715fd57152131bfb66314edaddb8206",
"assets/images/k3333.jpg": "4103670d131ecdf22e7214809b11532b",
"assets/images/k4.jpg": "d856124390ea381c9a9a9e6266c06a17",
"assets/images/k44.jpg": "ef7b9da2b5590b168f18f434bc068b84",
"assets/images/k4444.jpg": "f64b42837bd348872e28927a47e8dc49",
"assets/images/k5.jpg": "8291b6fcf5cee88bb20dd411de272d37",
"assets/images/k55.jpg": "e012477dac3a930bd7bbb401489ec82f",
"assets/images/k5555.jpg": "092a45974874ccf27a3d75f0fff36037",
"assets/images/k6.jpg": "f49a82e6020582364cef437824c0d311",
"assets/images/k66.jpg": "5d4e217995590596f547291333490f63",
"assets/images/k6666.jpg": "925a0b9541b07c031a1144b627468ce4",
"assets/images/k7.jpg": "a46e047cfdb5065501960abc8fc78d01",
"assets/images/k8.jpg": "1a45ca4ef8b63f679e6c6399aaa44ea8",
"assets/images/k9.jpg": "a941a273c638c687007d6ad5ce42f40d",
"assets/images/kfree.jpg": "4c9802ef817d75d2f53d534347c22fd8",
"assets/images/kretro.jpg": "6fb35a181f8c2ac13f086e21d9d75305",
"assets/images/kretro1.jpg": "e0bf432192b84e15abe86c4fad352f08",
"assets/images/kretro2.jpg": "961e2ca6800a2bd8771db207866d0fef",
"assets/images/kretro3.jpg": "39af44533868e886a3f1a20670da20ec",
"assets/images/kretro4.jpg": "4c67495bb7d6f21b9fa2dfc18ae7935a",
"assets/images/kretro5.jpg": "08a033861f5681b2b4207d9e34ad752b",
"assets/images/kretro6.jpg": "f8f550b9e7f9b203d9a9c5499a20bd40",
"assets/images/kretro7.jpg": "c5eb49f48919e4e844682cca9d0fa6fd",
"assets/images/kretro8.jpg": "754824634ac1b3cb4824a11edf6fc7b3",
"assets/images/kretro9.jpg": "c67d4e842c5146a0e3db895562fa712f",
"assets/images/trans.png": "f01ae29dd28f3fd24118900bb68cff54",
"assets/NOTICES": "3f2bb52b86c41102078eb643709494d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"BP6_w.png": "39ded1130474daac025642e681f43f65",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "32221bfc4ca5a9fc84097d2ca3d60daa",
"icons/Icon-192.png": "1a97439b9353696b37918ad3f009bcd4",
"icons/Icon-512.png": "1ecef01de08567736719cea7e8bc5d20",
"index.html": "bc691062934cf1a477c77cd5dbf87acc",
"/": "bc691062934cf1a477c77cd5dbf87acc",
"main.dart.js": "982dc2e540c10a6bfbeb4b03ac59c9ef",
"manifest.json": "3751dcfd6d17ba590e3808d08ed0b371",
"version.json": "117d49214fea03bb2c014d6b7a0ce011"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
