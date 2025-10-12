
// Define which filters are allowed per main filter
const filterOptionsMap = {
  ALL: ["ALL", "SUMMER", "WEDDING", "SPRING", "QUEEN","GOODESS", "SPICY", "CUTE", "MERMAID", "SCHOOL", "OTHER"],
  MC: ["ALL", "SUMMER", "WEDDING", "SPRING", "QUEEN", "SPICY", "CUTE", "MERMAID", "SCHOOL", "OTHER"], // only show these when MC is selected
  SYLUS: ["ALL", "SUMMER", "WEDDING", "SPRING", "SPICY", "CUTE", "SCHOOL",  "OTHER"], 
  ZAYNE: ["ALL", "SUMMER", "WEDDING", "SPRING","GOODESS", "SPICY", "CUTE", "SCHOOL",  "OTHER"], 
  CALEB: ["ALL", "SUMMER", "WEDDING", "SPRING",  "SPICY", "CUTE", "SCHOOL",  "OTHER"], 
  RAFAYEL: ["ALL", "SUMMER", "WEDDING", "SPRING",  "SPICY", "CUTE", "MERMAID", "SCHOOL", "OTHER"], 
  XAVIER: ["ALL", "SUMMER", "WEDDING", "SPRING", "QUEEN", "SPICY", "CUTE", "SCHOOL",  "OTHER"], 
  UNIV: [], 
  COUPLE: [], 
  CANVA: [], 
};



const imageList = [
  { filename: "SYLUS1.jpg", categories: ["WEDDING"], label: "FREE" ,  twitterLink: "https://x.com/mephistomum/status/1940802154585116787" },
  { filename: "SYLUS2.jpg", categories: ["WEDDING"], label: "FREE" ,twitterLink: "https://x.com/mephistomum/status/1941132096090898597" },
  { filename: "SYLUS5.jpg", categories: ["WEDDING"], label: "FREE" ,twitterLink: "https://x.com/mephistomum/status/1942600224117252199" },
  { filename: "SYLUS6_UNIV1.jpg", categories: ["CUTE","WEDDING"], label: "FREE" ,twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "SYLUS106.jpg", categories: ["SUMMER","SPICY"],twitterLink: "https://x.com/mephistomum/status/1958693888274964490" },
  { filename: "SYLUS78.jpg", categories: ["WEDDING"], label: "FREE" ,twitterLink: "https://x.com/mephistomum/status/1946742382411878756" },
  { filename: "SYLUS77.jpg", categories: ["WEDDING"], label: "FREE" ,twitterLink: "https://x.com/mephistomum/status/1946508489859473424" },
  { filename: "SYLUS76.jpg", categories: ["WEDDING"], label: "FREE" ,twitterLink: "https://x.com/mephistomum/status/1946025270324142487" },
   { filename: "SYLUS111.jpg", categories: ["CUTE"] ,twitterLink: "https://x.com/mephistomum/status/1961044494817931757" },
  { filename: "SYLUS112.jpg", categories: ["SPICY"] ,twitterLink: "https://x.com/mephistomum/status/1961246892119273927" },
  { filename: "MC87.jpg", categories: ["WEDDING","CUTE"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1961918133830320587" },
  { filename: "MC12.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1943170388886003954" },
  { filename: "MC9.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1941503185488855320" },
  { filename: "MC10.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1943287348952994063" },
  { filename: "MC54.jpg", categories: ["QUEEN","SPRING","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1948559871592595934" },
  { filename: "MC55.jpg", categories: ["QUEEN"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1948571489600766452" },
  { filename: "MC56.jpg", categories: ["QUEEN","SPRING","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1948587999505383625" },
  { filename: "MC59.jpg", categories: ["QUEEN","SPRING","WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1948971469163331635" },
  { filename: "MC60.jpg", categories: ["QUEEN","SPRING","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1948920718437351631" },
  { filename: "MC61.jpg", categories: ["QUEEN","SPRING","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1949781070255419465" },
  { filename: "MC62.jpg", categories: ["QUEEN"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1949487479914160263" },
  { filename: "MC63.jpg", categories: ["QUEEN"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1950513189604761831" },
    { filename: "MC88.jpg", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1963440088550932640" },
      { filename: "MC89.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1963240920939217341" },
        { filename: "MC90.jpg", categories: ["SCHOOL"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1965370651457527961" },
          { filename: "MC91.jpg", categories: ["SCHOOL", "CUTE"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1966242558725730503" },
            { filename: "MC92.jpg", categories: ["SPRING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1965773502012862692" },
              { filename: "MC93.jpg", categories: ["QUEEN","SPRING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1965985095610978354" },
                { filename: "MC94.jpg", categories: ["QUEEN"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1967570991514820983" },
                  { filename: "MC95.jpg", categories: ["QUEEN"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1967570991514820983" },
                    { filename: "MC96.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1967898730721579068" },
                      { filename: "MC97.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1967996345291288835" },

                      { filename: "SYLUS121.jpg", categories: ["SPICY","CUTE"] ,twitterLink: "https://x.com/mephistomum/status/1976665787617390958" },
                      { filename: "SYLUS122.jpg", categories: ["CUTE"] ,twitterLink: "https://x.com/mephistomum/status/1976665787617390958" },
                      { filename: "SYLUS123.jpg", categories: ["CUTE"] ,twitterLink: "https://x.com/mephistomum/status/1976665787617390958" },
                      { filename: "SYLUS124.jpg", categories: ["OTHER"] ,twitterLink: "https://x.com/mephistomum/status/1965207759319965889" },
                      { filename: "SYLUS125.jpg", categories: ["CUTE"] ,twitterLink: "https://x.com/mephistomum/status/1976882783487508841" },
                      { filename: "SYLUS126.jpg", categories: ["CUTE"] ,twitterLink: "https://x.com/mephistomum/status/1909193670357913820" },

                      { filename: "SYLUS113.jpg", categories: ["SUMMER","CUTE"] ,twitterLink: "https://x.com/mephistomum/status/1965207759319965889" },
                      { filename: "SYLUS114.jpg", categories: ["CUTE","SCHOOL"] ,twitterLink: "https://x.com/mephistomum/status/1965652179370520943" },
                      { filename: "SYLUS115.jpg", categories: ["SPICY"] ,twitterLink: "https://x.com/mephistomum/status/1966276591144853997" },
                      { filename: "SYLUS116.jpg", categories: ["CUTE","SPRING"] ,twitterLink: "https://x.com/mephistomum/status/1967219696564101441" },

                      { filename: "SYLUS117.jpg", categories: ["SPICY"] ,twitterLink: "https://x.com/mephistomum/status/1968871621344518414" },
                      { filename: "SYLUS118.jpg", categories: ["SPICY"] ,twitterLink: "https://x.com/mephistomum/status/1968615544614953076" },                      
                      { filename: "SYLUS119.jpg", categories: ["CUTE","WEDDING"] ,twitterLink: "https://x.com/mephistomum/status/1968406994815172875" },
                      { filename: "SYLUS120.jpg", categories: ["SPICY"] ,twitterLink: "https://x.com/mephistomum/status/1972589263884784079" },
                      { filename: "MC98.jpg", categories: ["GOODESS",] ,twitterLink: "https://x.com/mephistomum/status/1971362949127442817" },                      
                      { filename: "MC99.jpg", categories: ["CUTE","GOODESS",] ,twitterLink: "https://x.com/mephistomum/status/1971386298616381510" },
                      { filename: "MC100.jpg", categories: ["CUTE","GOODESS",] ,twitterLink: "https://x.com/mephistomum/status/1972563998811025432" },
                       { filename: "MC101.jpg", categories: ["CUTE","SPRING"] ,twitterLink: "https://x.com/mephistomum/status/1973312221456556306" },
                      { filename: "ZAYNE18.jpg", categories: ["CUTE", "GODDESS"] ,twitterLink: "https://x.com/mephistomum/status/1971360707510943935" },

  { filename: "MC85.png", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/stayyna_/status/1944982992532742293" },
  { filename: "MC86.png", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/stayyna_/status/1944982992532742293" },
  { filename: "MC64.jpg",  categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1952633731627336060" },
  { filename: "MC65.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1954490767747203299" },
  { filename: "MC66.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1954495094087954442" },
  { filename: "MC67.PNG", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1955404738167705650" },
  { filename: "MC68.PNG", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1955547526205149502" },
  { filename: "MC69.PNG", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1955789108724556097" },
  { filename: "MC78.jpg", categories: ["SPRING"], label: "FREE", twitterLink: "https://x.com/mephistomum/status/1955789108724556097" },
  { filename: "MC79.jpeg", categories: ["SUMMER","CUTE"], label: "FREE", twitterLink: "https://x.com/Yonioryu/status/1957783843999752688" },
  { filename: "MC80.jpeg", categories: ["SUMMER","CUTE"], label: "FREE", twitterLink: "https://x.com/Yonioryu/status/1956967894958616990" },
  { filename: "MC81.jpeg", categories: ["SUMMER","CUTE"], label: "FREE", twitterLink: "https://x.com/Yonioryu/status/1956967894958616990" },
  { filename: "MC82.jpeg", categories: ["SUMMER","CUTE"], label: "FREE", twitterLink: "https://x.com/Yonioryu/status/1956578128572404092" },
  { filename: "MC83.jpeg", categories: ["SUMMER","CUTE"], label: "FREE", twitterLink: "https://x.com/Yonioryu/status/1956578128572404092" },
  { filename: "MC84.jpg", categories: ["SUMMER","CUTE"], label: "FREE", twitterLink: "https://x.com/mephistomum/status/1959560297703985639" },
  { filename: "MC70.PNG", categories: ["SUMMER"] , label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1955794032787116107" },
  { filename: "MC71.PNG", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1955802719933067767" },
  { filename: "MC72.jpg", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1956264684908371995" },
  { filename: "MC73.jpg", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1956266667904000466" },
  { filename: "MC75.jpg", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/farahsylove/status/1956613349103554892" },
  { filename: "MC76.jpg", categories: ["SUMMER"] , twitterLink: "https://x.com/farahsylove/status/1954875509210599865" },
  { filename: "MC77.jpg", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/farahsylove/status/1956613349103554892" },
  { filename: "MC74.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1956682927716413773" },
  { filename: "MC57.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1948592037135352102" },
  { filename: "MC58.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1948705619386495330" },
  { filename: "MC35.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1945687731235180574" },
  { filename: "MC38.jpg", categories: ["SPRING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1946029215788470732" },
  { filename: "MC39.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1946368091535098005" },
  { filename: "MC34_UNIV8.jpg", categories: ["SPRING","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
  { filename: "MC36.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1945687731235180574" },
  { filename: "MC1.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1940706716460741024" },
  { filename: "MC2.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1940709217113174082" },
  { filename: "MC37.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1943956266533236847" },
  { filename: "MC42.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1947745975314833605" },
  { filename: "MC43.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1947745975314833605" },
  { filename: "MC41.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1947489103546880208" },
  { filename: "MC40.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1947528831235199351" },
  { filename: "MC45.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1947235727944867873" },
  { filename: "MC44.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1947242494246158513" },
  { filename: "MC46.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1947851656059597034" },
  { filename: "MC47.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1947851656059597034" },
  { filename: "MC48.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1947851656059597034" },
  { filename: "MC49.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1947851656059597034" },
  { filename: "MC50.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1947851656059597034" },
  { filename: "MC51.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1947851656059597034" },
  { filename: "MC52.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1947937837891854471" },
  { filename: "MC8.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1941987896518676710" },
  { filename: "MC3.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1940723123424579748" },
  { filename: "MC4.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1940828642046845320" },
  { filename: "MC5.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1941275891570704613" },
  { filename: "MC6.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1942742653436846157" },
  { filename: "MC7.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1942394379353895197" },
  { filename: "MC11.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1943293135951663159" },
  { filename: "MC53.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/serntzyne/status/1948255482654663090" },
  { filename: "RAFAYEL12.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1946753368300376574" },
  { filename: "RAFAYEL11.jpg", categories: ["WEDDING","MERMAID"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1945846519380545592" },
  { filename: "RAFAYEL1_UNIV1.jpg", categories: ["CUTE","WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "RAFAYEL2_UNIV2.jpg", categories: ["CUTE","WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
  { filename: "SYLUS91.PNG", categories: ["SPICY","SUMMER"], twitterLink: "https://x.com/mephistomum/status/1955452195010453585" },
  { filename: "SYLUS93.PNG", categories: ["SPICY","SUMMER"], twitterLink: "https://x.com/mephistomum/status/1955973156134641775" },
  { filename: "SYLUS96.jpg", categories: ["SPICY","SUMMER"], twitterLink: "https://x.com/mephistomum/status/1956891822653124959" },
  { filename: "SYLUS94.jpg", categories: ["SUMMER"],twitterLink: "https://x.com/mephistomum/status/1956181646199210185" },
  { filename: "SYLUS95.jpg", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1956709441501278302" },
  { filename: "SYLUS97.jpg", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1956709441501278302" },
  { filename: "SYLUS98.jpg", categories: ["SUMMER","SPICY"] , twitterLink: "https://x.com/mephistomum/status/1957729922031460842" },
  { filename: "SYLUS99.jpg", categories: ["SUMMER"] , twitterLink: "https://x.com/mephistomum/status/1957592585654137193" },
  { filename: "SYLUS100.jpg", categories: ["SUMMER"] , twitterLink: "https://x.com/mephistomum/status/1957592585654137193" },
  { filename: "SYLUS103.jpg", categories: ["SUMMER","SPICY"] , twitterLink: "https://x.com/mephistomum/status/1957592585654137193" },
  { filename: "SYLUS104.jpg", categories: ["SUMMER","SPICY"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1957592585654137193" },
  { filename: "SYLUS105.jpg", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/Mephistosfriend" , isTall : true},
  { filename: "SYLUS101.jpg", categories: ["SUMMER","SPICY"], twitterLink: "https://x.com/mephistomum/status/1957752279630819691" },
  { filename: "SYLUS102.jpg", categories: ["SUMMER","SPICY"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1957752279630819691" },
    { filename: "SYLUS108.jpg", categories: ["SUMMER","CUTE"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1959761987589804296" },
      { filename: "SYLUS109.jpg", categories: ["SUMMER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1959763807150198827" },
        { filename: "SYLUS110.jpg", categories: ["SUMMER","CUTE"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1960519071075852477" },
  { filename: "SYLUS90.PNG", categories: ["OTHER", "WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1955443180679426553" },
  { filename: "SYLUS89.PNG", categories: ["OTHER", "WEDDING"], label: "FREE" ,  twitterLink: "https://x.com/mephistomum/status/1955443180679426553" },
  { filename: "SYLUS3.jpg", categories: ["WEDDING"],  twitterLink: "https://x.com/mephistomum/status/1941271218528845911" },
  { filename: "SYLUS4.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1944592056229544041" },
  { filename: "SYLUS7.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1943914804445688026" },
  { filename: "SYLUS8.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1941986020897255902" },
  { filename: "SYLUS9_UNIV2.jpg", categories: ["CUTE","WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
  { filename: "SYLUS10.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1941765807597551992" },
  { filename: "SYLUS11.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1943621111402651684" },
  { filename: "SYLUS12_UNIV3.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1941625030573687127" },
  { filename: "SYLUS13.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1941871515718623385" },
  { filename: "SYLUS14.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1941493286914691283" },
  { filename: "SYLUS15_UNIV4.jpg", categories: ["WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1943206810376376379" },
  { filename: "SYLUS16.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1943114751145586933" },
  { filename: "SYLUS17.jpg", categories: ["CUTE","WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1943122785100009968" },
  { filename: "SYLUS79.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1946514780585689205" },
  { filename: "SYLUS75.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1941858823016497395" },
  { filename: "SYLUS74.jpg", categories: ["OTHER", "WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1945802726304350531" },
  { filename: "SYLUS80.jpg", categories: ["OTHER", "WEDDING"], twitterLink: "https://x.com/mephistomum/status/1947274804547227996" },
  { filename: "SYLUS81.jpg", categories: ["OTHER" ,"WEDDING"], twitterLink: "https://x.com/mephistomum/status/1947482221889392682" },
  { filename: "SYLUS82.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1947223131317502134" },
  { filename: "SYLUS83.jpg", categories: ["OTHER"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1947614242317996313" },
  { filename: "SYLUS84.jpg", categories: ["SPICY"], twitterLink: "https://x.com/mephistomum/status/1947851656059597034" },
  { filename: "SYLUS85.jpg", categories: ["QUEEN","OTHER","CUTE","WEDDING"], label: "FREE" , twitterLink: "https://x.com/mephistomum/status/1949676030920368496" },
  { filename: "SYLUS86.jpg", categories: ["QUEEN","OTHER","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1949064342705668450" },
  { filename: "CALEB1_UNIV1.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "CALEB2.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1944345708120977517" },
  { filename: "CALEB3_UNIV2.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
  { filename: "CALEB4_UNIV3.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1941625030573687127" },
  { filename: "CALEB12.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1947851656059597034" },
  { filename: "CALEB13.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/itwadorii/status/1948016841143562735" },
  { filename: "CALEB14.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/applesav1or/status/1948225437907276279", isTall : true },
  { filename: "CALEB15.jpg", categories: ["SPICY"], label: "FREE", twitterLink: "https://x.com/H1ghC0ncept/status/1950360772359393333", isTall : true },
  { filename: "CALEB16.jpg", categories: ["WEDDING"], label: "FREE", twitterLink: "https://x.com/H1ghC0ncept/status/1950360772359393333", isTall : true },
  { filename: "CALEB17.jpg", categories: ["WEDDING"], label: "FREE", twitterLink: "https://x.com/H1ghC0ncept/status/1950360772359393333", isTall : true },
  { filename: "CALEB18.jpg", categories: ["OTHER"], label: "FREE", twitterLink: "https://x.com/H1ghC0ncept/status/1950360772359393333", isTall : true },
  { filename: "XAVIER23.jpg", categories: ["QUEEN"], twitterLink: "https://x.com/mephistomum/status/1950141611905519671" },
  { filename: "XAVIER24.jpg", categories: ["QUEEN","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1951651288066015702" },
  { filename: "XAVIER18.jpg", categories: ["QUEEN","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1948961940363194544" },
  { filename: "XAVIER20.jpg", categories: ["QUEEN"], twitterLink: "https://x.com/mephistomum/status/1949433692642025934" },
  { filename: "XAVIER21.jpg", categories: ["QUEEN","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1949678647725449370" },
  { filename: "XAVIER22.jpg", categories: ["QUEEN","SPICY","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1949442301903954146" },
  { filename: "XAVIER13.jpg", categories: ["QUEEN","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1948726557100704086" },
  { filename: "XAVIER14.jpg", categories: ["QUEEN","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1948770725739016674" },
  { filename: "XAVIER15.jpg", categories: ["QUEEN","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1948775044638769608" },
  { filename: "XAVIER16.jpg", categories: ["QUEEN","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1948781277496443290" },
  { filename: "XAVIER17.jpg", categories: ["QUEEN","WEDDING","SPRING"], twitterLink: "https://x.com/mephistomum/status/1948787695519760441" },
  { filename: "XAVIER1_UNIV1.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "XAVIER2_UNIV2.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
  { filename: "XAVIER9.jpg", categories: ["CUTE","OTHER"], twitterLink: "https://x.com/mephistomum/status/1947229931705934246" },
   { filename: "XAVIER25.jpg", categories: ["CUTE"], twitterLink: "https://x.com/mephistomum/status/1976814719236555232" },
    { filename: "ZAYNE15.jpg", categories: ["CUTE"], twitterLink: "https://x.com/mephistomum/status/1961349231274291585" },
      { filename: "ZAYNE16.jpg", categories: ["CUTE"], twitterLink: "https://x.com/mephistomum/status/1962732208835485760" },
      { filename: "ZAYNE17.jpg", categories: ["CUTE"], twitterLink: "https://x.com/mephistomum/status/1963886540414964033" },
  { filename: "ZAYNE9.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1945807053412515904" },
  { filename: "ZAYNE1_UNIV1.PNG", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "SYLUS70.PNG", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1896876166562394123" },
  { filename: "SYLUS71.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1941495453536878986" },
  { filename: "SYLUS72.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1927490189771063490" },
  { filename: "SYLUS73_UNIV8.jpg", categories: ["SPRING","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
  { filename: "SYLUS88.PNG", categories: ["SUMMER","SPICY"], twitterLink: "https://x.com/mephistomum/status/1955381268130259364" },
  { filename: "SYLUS92.PNG", categories: ["SUMMER","CUTE"], twitterLink: "https://x.com/mephistomum/status/1955500608737464422" },
  { filename: "SYLUS87.PNG", categories: ["SUMMER","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1955263840184053768" },
  { filename: "XAVIER3_UNIV5.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "XAVIER4_UNIV6.jpg", categories: ["SPRING","CUTE","OTHER"],  twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "XAVIER5_UNIV7.jpg", categories: ["CUTE","WEDDING"],  twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "XAVIER6.PNG", categories: ["OTHER","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1905143930280357895" },
  { filename: "XAVIER7.jpg", categories: ["CUTE","OTHER"], twitterLink: "https://x.com/mephistomum/status/1945277972778238092" },
  { filename: "XAVIER8_UNIV8.jpg", categories: ["SPRING","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
  { filename: "XAVIER10.jpg", categories: ["QUEEN","WEDDING"], twitterLink: "https://x.com/fayelspearl/status/1936670339037323757" },
  { filename: "XAVIER11.jpg", categories: ["OTHER","WEDDING"], twitterLink: "https://x.com/fayelspearl/status/1936670339037323757" },
  { filename: "XAVIER12.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1948721927020826969" },
  { filename: "ZAYNE4_UNIV5.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "ZAYNE5_UNIV6.jpg", categories: ["SPRING","CUTE","OTHER"], twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "ZAYNE6.jpg", categories: ["SPRING","WEDDING"],  twitterLink: "https://x.com/mephistomum/status/1924597497789612506" },
  { filename: "ZAYNE7_UNIV7.jpg", categories: ["CUTE","WEDDING"],  twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "ZAYNE8_UNIV8.jpg", categories: ["SPRING","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1945655814469062761", isTall : false},
  { filename: "ZAYNE12.jpg", categories: ["OTHER"], twitterLink: "https://x.com/serntzyne/status/1948255482654663090", isTall : false},
  { filename: "RAFAYEL13.jpg", categories: ["SPRING","CUTE","WEDDING"], twitterLink: "https://x.com/VoidHotaru/status/1947391700261081540", isTall : true },
  { filename: "ZAYNE14.jpg", categories: ["SPRING","WEDDING"], twitterLink: "https://x.com/ZaynesBlosm/status/1948277075783090462", isTall : true },
  { filename: "ZAYNE11.jpg", categories: ["OTHER"], twitterLink: "https://x.com/elyitian/status/1942020339510153461", isTall : true },
  { filename: "ZAYNE13.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/itwadorii/status/1948452363158913070" },
  { filename: "ZAYNE2.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1944029345473081357" },
  { filename: "ZAYNE3_UNIV2.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
  { filename: "ZAYNE10.jpg", categories: ["SPICY","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1945811197800153097" },
  { filename: "CALEB5.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1905799995456192526" },
  { filename: "CALEB6_UNIV5.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "CALEB7.jpg", categories: ["CUTE"], twitterLink: "https://x.com/mephistomum/status/1933321292893298892" },
  { filename: "CALEB8_UNIV6.jpg", categories: ["SPRING","CUTE","OTHER"],  twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "CALEB9_UNIV7.jpg",categories: ["CUTE","WEDDING"],  twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "CALEB10.jpg", categories: ["SPICY","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1931488023197421671" },
  { filename: "CALEB11_UNIV8.jpg", categories: ["SPRING","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
  { filename: "COUPLE1F.jpg", twitterLink: "https://x.com/mephistomum/status/1916758508487475260" },
  { filename: "COUPLE1M.jpg", twitterLink: "https://x.com/mephistomum/status/1916758508487475260" },
  { filename: "COUPLE2F.jpg", twitterLink: "https://x.com/mephistomum/status/1919002263143805222" },
  { filename: "COUPLE2M.jpg", twitterLink: "https://x.com/mephistomum/status/1919002263143805222" },
  { filename: "COUPLE3F.jpg", twitterLink: "https://x.com/mephistomum/status/1937451192067719646" },
  { filename: "COUPLE3M.jpg", twitterLink: "https://x.com/mephistomum/status/1937451192067719646" },
  { filename: "COUPLE4F.jpg", twitterLink: "https://x.com/mephistomum/status/1959399742703911090" },
  { filename: "COUPLE4M.jpg", twitterLink: "https://x.com/mephistomum/status/1959399742703911090" },
    { filename: "COUPLE5F.jpg", twitterLink: "https://x.com/mephistomum/status/1961246892119273927" },
  { filename: "COUPLE5M.jpg", twitterLink: "https://x.com/mephistomum/status/1961246892119273927" },
   { filename: "COUPLE6F.jpg", twitterLink: "https://x.com/mephistomum/status/1968669348769181877" },
  { filename: "COUPLE6M.jpg", twitterLink: "https://x.com/mephistomum/status/1968669348769181877" },
  { filename: "MC13.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1909934399489192221" },
  { filename: "MC14.jpg", categories: ["CUTE","OTHER"], twitterLink: "https://x.com/mephistomum/status/1910847621205275081" },
  { filename: "MC15.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1914352106557022719" },
  { filename: "MC16.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1921514133586932096" },
  { filename: "MC17.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1923269147334435274" },
  { filename: "MC18.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1924384155674333194" },
  { filename: "MC19.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1931069180868284476" },
  { filename: "MC20.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1931547034949181824" },
  { filename: "MC21.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1932417559481217346" },
  { filename: "MC22.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1933210188946997342" },
  { filename: "MC23.jpg", categories: ["MERMAID"], twitterLink: "https://x.com/mephistomum/status/1935117272902943221" },
  { filename: "MC24.jpg", categories: ["SPRING","MERMAID"], twitterLink: "https://x.com/mephistomum/status/1935122589455892493" },
  { filename: "MC25.jpg", categories: ["SUMMER","MERMAID"], twitterLink: "https://x.com/mephistomum/status/1936967969525166450" },
  { filename: "MC26.jpg", categories: ["SPRING"], twitterLink: "https://x.com/mephistomum/status/1938207952852422851", label: "FREE" },
  { filename: "MC27.jpg", categories: ["SUMMER"],  twitterLink: "https://x.com/mephistomum/status/1938446415065452724" },
  { filename: "MC28.jpg", categories: ["OTHER"],  twitterLink: "https://x.com/mephistomum/status/1940830369332580844" },
  { filename: "MC29.jpg",  categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1941486964106199502" },
  { filename: "MC30_UNIV6.jpg", categories: ["SPRING","CUTE","OTHER"],  twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "MC31.PNG", categories: ["OTHER"],  twitterLink: "https://x.com/mephistomum/status/1902552553264660667" },
  { filename: "MC32.PNG", categories: ["OTHER","CUTE"], twitterLink: "https://x.com/mephistomum/status/1886649769474568223" },
  { filename: "MC33.jpg", categories: ["SUMMER"],  twitterLink: "https://x.com/mephistomum/status/1904098527292408276" },
  { filename: "RAFAYEL3.jpg", categories: ["CUTE","MERMAID"],  twitterLink: "https://x.com/mephistomum/status/1935936354585854074" },
  { filename: "RAFAYEL5_UNIV6.jpg", categories: ["SPRING","CUTE","OTHER"],  twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "RAFAYEL6_UNIV5.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "RAFAYEL7.jpg", categories: ["CUTE"],  twitterLink: "https://x.com/mephistomum/status/1928760466714550595" },
  { filename: "RAFAYEL8.PNG", categories: ["SPICY"],  twitterLink: "https://x.com/mephistomum/status/1905208741743796377" },
  { filename: "RAFAYEL9.PNG", categories: ["SPICY","WEDDING"],  twitterLink: "https://x.com/mephistomum/status/1903733426362187963" },
  { filename: "RAFAYEL4_UNIV7.jpg",categories: ["CUTE","WEDDING"],  twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "RAFAYEL10_UNIV8.jpg", categories: ["SPRING","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
  { filename: "SYLUS19.jpg", categories: ["SPICY","WEDDING"],  twitterLink: "https://x.com/mephistomum/status/1945704542173343986" },
  { filename: "SYLUS18.jpg", categories: ["SPICY"],  twitterLink: "https://x.com/mephistomum/status/1907423316249633219" },
  { filename: "SYLUS20.jpg", categories: ["SPICY"],  twitterLink: "https://x.com/mephistomum/status/1909193670357913820" },
  { filename: "SYLUS21.jpg", categories: ["SPICY"],  twitterLink: "https://x.com/mephistomum/status/1909199555922641035" },
  { filename: "SYLUS22.jpg", categories: ["CUTE"],  twitterLink: "https://x.com/mephistomum/status/1909203359007166779" },
  { filename: "SYLUS23.jpg", categories: ["OTHER"],  twitterLink: "https://x.com/mephistomum/status/1910858522188804595" },
  { filename: "SYLUS24.jpg", categories: ["WEDDING","SPRING"],  twitterLink: "https://x.com/mephistomum/status/1910998518262866055" },
  { filename: "SYLUS25.jpg", categories: ["WEDDING","SPRING", "SPICY"],  twitterLink: "https://x.com/mephistomum/status/1911203518905811118" },
  { filename: "SYLUS26.jpg", categories: ["SPRING","CUTE"],  twitterLink: "https://x.com/mephistomum/status/1911212254902800521" },
  { filename: "SYLUS27.jpg", categories: ["SUMMER","SPICY"],  twitterLink: "https://x.com/mephistomum/status/1913561269069861301" },
  { filename: "SYLUS28.jpg", categories: ["CUTE"],  twitterLink: "https://x.com/mephistomum/status/1911331573112222103" },
  { filename: "SYLUS29.jpg", categories: ["CUTE"],  twitterLink: "https://x.com/mephistomum/status/1913040487352836595" },
  { filename: "SYLUS30.jpg", categories: ["SUMMER","CUTE"],  twitterLink: "https://x.com/mephistomum/status/1914248795656778081" },
  { filename: "SYLUS31.jpg", categories: ["OTHER"],  twitterLink: "https://x.com/mephistomum/status/1914885094499868975" },
  { filename: "SYLUS32.jpg", categories: ["OTHER"],  twitterLink: "https://x.com/mephistomum/status/1916696561595371688" },
  { filename: "SYLUS33_UNIV5.jpg", categories: ["CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "SYLUS34.jpg", categories: ["SPRING"],  twitterLink: "https://x.com/mephistomum/status/1918487562513178736" },
  { filename: "SYLUS35.jpg", categories: ["SPRING","CUTE"], twitterLink: "https://x.com/mephistomum/status/1919235874644251111" },
  { filename: "SYLUS36.jpg", categories: ["SPRING","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1919676369673580590" },
  { filename: "SYLUS37_UNIV6.jpg", categories: ["SPRING","CUTE","OTHER"],  twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "SYLUS38.jpg", categories: ["CUTE"], twitterLink: "https://x.com/mephistomum/status/1921821380892332262" },
  { filename: "SYLUS39.jpg", categories: ["WEDDING","CUTE"], twitterLink: "https://x.com/mephistomum/status/1922813888434696377" },
  { filename: "SYLUS40.jpg", categories: ["WEDDING","SPICY"], twitterLink: "https://x.com/mephistomum/status/1927879606650196121" },
  { filename: "SYLUS41.jpg", categories: ["WEDDING","CUTE"], twitterLink: "https://x.com/mephistomum/status/1927887352845779428" },
  { filename: "SYLUS42.jpg", categories: ["SPRING","CUTE"], twitterLink: "https://x.com/mephistomum/status/1927889068987404491" },
  { filename: "SYLUS43.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1928376769515561247" },
  { filename: "SYLUS44.jpg", categories: ["SPICY"], twitterLink: "https://x.com/mephistomum/status/1928384816891744483" },
  { filename: "SYLUS45.jpg", categories: ["WEDDING","OTHER"], twitterLink: "https://x.com/mephistomum/status/1929820376886137082" },
  { filename: "SYLUS46.jpg", categories: ["WEDDING","CUTE"], twitterLink: "https://x.com/mephistomum/status/1929826309859168667" },
  { filename: "SYLUS47.jpg", categories: ["WEDDING","SUMMER","CUTE"], twitterLink: "https://x.com/mephistomum/status/1930230223204929628" },
  { filename: "SYLUS48.jpg", categories: ["SPRING","CUTE"], twitterLink: "https://x.com/mephistomum/status/1930238391897207144" },
  { filename: "SYLUS49.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1931270871118987414" },
  { filename: "SYLUS50_UNIV7.jpg",categories: ["CUTE","WEDDING"],  twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "SYLUS51.jpg", categories: ["SPICY"], twitterLink: "https://x.com/mephistomum/status/1932369567319531935" },
  { filename: "SYLUS52.jpg", categories: ["SPRING","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1932610858909381044" },
  { filename: "SYLUS53.jpg", categories: ["SUMMER","CUTE","WEDDING"], twitterLink: "https://x.com/mephistomum/status/1933407992734732363" },
  { filename: "SYLUS54.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1937077454067392661" },
  { filename: "SYLUS55.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS56.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS57.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS58.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS59.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS60.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS61.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS62.jpg", categories: ["WEDDING","CUTE"], twitterLink: "https://x.com/mephistomum/status/1938240652007063590" },
  { filename: "SYLUS63.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1938414252110581932" },
  { filename: "SYLUS64.jpg", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1938419044140650828" },
  { filename: "SYLUS65.jpg", categories: ["SPICY"], twitterLink: "https://x.com/mephistomum/status/1940364201547174323" },
  { filename: "SYLUS66.jpg", categories: ["WEDDING"], twitterLink: "https://x.com/mephistomum/status/1940357313254342795" },
  { filename: "SYLUS67.PNG", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1903450179468206094" },
  { filename: "SYLUS68.PNG", categories: ["SPICY"], twitterLink: "https://x.com/mephistomum/status/1899409406351270328" },
  { filename: "SYLUS69.PNG", categories: ["OTHER"], twitterLink: "https://x.com/mephistomum/status/1904879983233032293" },
  
  { filename: "CANVA1.jpg", twitterLink: "https://x.com/mephistomum/status/1896494068936626253", hiddenInAll: true },
  { filename: "CANVA2.jpg", twitterLink: "https://x.com/mephistomum/status/1934831272028938720", hiddenInAll: true },
  { filename: "CANVA3.jpg", twitterLink: "https://x.com/mephistomum/status/1896494068936626253", hiddenInAll: true },
  { filename: "CANVA4.jpg", twitterLink: "https://x.com/mephistomum/status/1896494068936626253", hiddenInAll: true },
  { filename: "CANVA5.jpg", twitterLink: "https://x.com/mephistomum/status/1896494068936626253", hiddenInAll: true },
  { filename: "CANVA6.jpg", twitterLink: "https://x.com/mephistomum/status/1896494068936626253", hiddenInAll: true },
  { filename: "CANVA7.png", twitterLink: "https://x.com/mephistomum/status/1918312897207517229", hiddenInAll: true }
];

let currentMainFilter = "ALL";  // <-- add this at the top
let currentSubFilter = "ALL";

function renderGallery(filter = "ALL", subFilter = "ALL") {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const filtered = imageList.filter(image => {
    const upperFilename = image.filename.toUpperCase();
    const upperCategories = (image.categories || []).map(c => c.toUpperCase());

    // Main filter (character, e.g. SYLUS, CALEB, ALL, etc.)
    const mainMatch =
      filter === "ALL" ? !image.hiddenInAll :
      filter === "UNIV" ? upperFilename.includes("_UNIV") :
      upperFilename.startsWith(filter);

    // Subfilter (category, e.g. SUMMER, WEDDING)
    const subMatch = subFilter === "ALL" || upperCategories.includes(subFilter);

    return mainMatch && subMatch;
  });

  filtered.forEach(image => {
    const imageURL = `https://mephistomum.github.io/mephistomum-gallery/assets/images/${image.filename}`;
    const altText = image.filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ");
    const twitterLink = image.twitterLink;

    const isFiveStar = image.filename.toUpperCase().startsWith("CANVA");
    const isTall = image.isTall;

    const article = document.createElement("article");
    article.className = "flex flex-col border border-gray-300 rounded shadow-sm overflow-hidden bg-white";

    const imageClass = isTall 
      ? "object-cover aspect-[3/4] h-[100%] sm:h-[100%] md:h-[100%] lg:h-[100%] object-top" 
      : "object-cover aspect-[3/4] h-full";

    article.innerHTML = `
      <div class="relative w-full ${isFiveStar ? "aspect-[3/3]" : "aspect-[3/4]"} bg-gray-100">
        <a href="${imageURL}" download>
          <img src="${imageURL}" alt="${altText}" 
               class="w-full ${imageClass} ${isFiveStar ? "scale-90" : ""}" 
               loading="lazy" 
               onerror="this.style.display='none'" />
        </a>
 ${
  image.label === "FREE" 
    ? `<span class="absolute top-1 left-1 bg-white text-[#a27c67] 
         text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] font-bold 
         px-0.5 sm:px-1 py-[1px] 
         rounded-full flex items-center gap-0.5 
         shadow border border-[#a27c67]">
         F2P
       </span>` 
    : ""
}


      </div>
      ${
        twitterLink
          ? `<a href="${twitterLink}" target="_blank" rel="noopener" 
                class="mt-2 mx-auto mb-4 text-center bg-[#a27c67] text-white px-4 py-1 rounded-full w-31 hover:bg-[#8d6d57] transition text-sm">
                View Post
             </a>`
          : ""
      }
    `;

    gallery.appendChild(article);
  });
}



document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.textContent.trim().toUpperCase();

    // ✅ Save main filter
    currentMainFilter = category;
    currentSubFilter = "ALL"; // reset sub filter

    // ✅ Re-render gallery
    renderGallery(currentMainFilter, currentSubFilter);

    // ✅ Update title
    const titleElement = document.getElementById("galleryTitle");
    titleElement.textContent = `${category} TEMPLATES`;

    // ✅ Update active styles
    document.querySelectorAll("nav button").forEach(btn => {
      btn.classList.remove("bg-[#d4bfaf]", "text-[#7e624a]");
      btn.removeAttribute("disabled");
    });
    button.classList.add("bg-[#d4bfaf]", "text-[#7e624a]");
    button.setAttribute("disabled", true);

    // ✅ Rebuild filter menu based on allowed options
    const filterMenu = document.getElementById("filterMenu");
    filterMenu.innerHTML = ""; // clear
    (filterOptionsMap[category] || filterOptionsMap.ALL).forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.charAt(0).toUpperCase() + opt.slice(1).toLowerCase();
      btn.className = "block w-full text-left px-4 py-2 hover:bg-gray-100";
      btn.setAttribute("data-category", opt);
      filterMenu.appendChild(btn);

      // ✅ Re-attach filter click handler
      btn.addEventListener("click", () => {
        filterLabel.textContent = btn.textContent;
        currentSubFilter = opt;
        renderGallery(currentMainFilter, currentSubFilter);
        filterMenu.classList.add("hidden");
      });
    });

    // ✅ Reset filter label back to "Filter"
    filterLabel.textContent = "Filter";
  });
});



// Initial render
renderGallery("ALL");
