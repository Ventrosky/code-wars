(ns random-triplets.test
  (:require [clojure.test :refer :all]
            [random-triplets :refer (recover-secret)]))

(def fixtures
  [["whatisup" "tup" "whi" "tsu" "ats" "hap" "tis" "whs"]
   ["mathisfun" "tsf" "asu" "maf" "ain" "sun" "mfu" "ath" "thi" "hif" "mhf" "aun" "mat" "fun" "hsn" "ais" "msn" "msu"]
   ["congrats" "gas" "ogs" "cnt" "con" "ats" "grt" "rts" "cra" "gat" "ngs" "oas"]
   ["solved" "led" "oed" "ole" "ove" "sol" "sed" "sle" "ved" "olv" "lvd"]
   ["abcdefghijklmnopqrstuvwxyz"
    "oxy" "hru" "bxz" "ryz" "vyz" "vwy" "osy" "iuz" "qyz" "kpv" "wxz" "kxy" "rwx" "anw" "bdt" "puy" "nvz" "fkq" "imz"
    "awy" "bkn" "tuw" "xyz" "fgj" "nyz" "syz" "kwx" "msu" "his" "qwz" "wyz" "jop" "rvy" "hpw" "stz" "jkr" "nuw" "hvw"
    "tuy" "lqy" "vwx" "rwz" "mow" "kqx" "ehr" "ekl" "dhp" "ruw" "egn" "moy" "qrs" "diq" "uwz" "uwx" "uxz" "elx" "ptv"
    "ktw" "vxy" "fyz" "vwz" "dfh" "htx" "cwx" "vxz" "fpx" "gxy" "gvw" "fls" "cfv" "gqs" "dty" "jpt" "dks" "swx" "dqx"
    "ors" "lvy" "rty" "iyz" "grw" "ghl" "cxz" "gtv" "fgn" "lrt" "rux" "uxy" "sxy" "buz" "lwy" "anv" "klz" "nqw" "muz"
    "kuy" "tvz" "owz" "chy" "hsy" "lrz" "asz" "frv" "dqv" "uvy" "txy" "bwy" "jqu" "oty" "pyz" "lyz" "nsu" "msx" "bsy"
    "lsz" "dmu" "iow" "cvw" "tyz" "lny" "mxy" "nvx" "nuz" "ghs" "rvw" "jux" "mvz" "drz" "ovx" "fnq" "abt" "hvx" "eux"
    "owy" "dim" "afw" "fnr" "dmx" "prz" "puv" "eyz" "cox" "cxy" "aiw" "qxy" "cin" "uvz" "uwy" "frx" "twz" "erv" "oqt"
    "mwx" "gvx" "cjk" "isy" "gsu" "ijs" "dmn" "lnv" "esw" "ouw" "bsz" "adg" "lwx" "mrx" "jkl" "fps" "prv" "gxz" "ouz"
    "hks" "irw" "nqy" "oqr" "fqy" "ejz" "eou" "jkz" "bgt" "fvw" "wxy" "tvw" "apw" "clx" "qsy" "knq" "dyz" "ipv" "eky"
    "ewz" "imv" "jsv" "lou" "eoq" "ais" "emy" "byz" "cku" "akp" "pxy" "hpq" "ptw" "exz" "lpy" "myz" "ltv" "dgn" "hot"
    "ctx" "aov" "mvx" "koq" "ivy" "bms" "hqw" "fhx" "ivz" "ftw" "lvz" "fgw" "swz" "jko" "djm" "rtu" "kmz" "qwy" "quv"
    "gsx" "pst" "imt" "cgy" "nwz" "orz" "him" "ntw" "suy" "sxz" "hxz" "efx" "akn" "hsz" "jow" "otx" "lnr" "mxz" "rxy"
    "bwz" "cjq" "bfo" "oxz" "ijr" "pqy" "jps" "mrw" "aey" "uyz" "jlu" "jsy" "kxz" "pvy" "jlp" "pvz" "fht" "knx" "fno"
    "pvw" "kvy" "jwy" "ens" "fjp" "fuw" "gmz" "nsy" "msz" "cdx" "lxy" "gyz" "btw" "nqz" "rwy" "rtw" "ltx" "mwy" "hmt"
    "knv" "ajy" "fqw" "suw" "ptz" "jlr" "mnw" "ntv" "npr" "luw" "gjo" "bjv" "mot" "kwz" "fin" "iuy" "pvx" "klu" "bcf"
    "fqv" "chu" "inw" "qst" "kqw" "oqs" "orv" "mtu" "nuy" "csz" "oqx" "rtz" "agq" "gsz" "iwy" "jly" "evx" "ent" "fgv"
    "ajn" "dhr" "apu" "lsv" "lqz" "kyz" "rsy" "nxy" "oux" "nqt" "cfh" "qsx" "alp" "lsu" "ery" "kvx" "jos" "opq" "mvw"
    "oqv" "awz" "lux" "gsv" "pqv" "bos" "osv" "fhy" "ksw" "htu" "tvx" "qvw" "jpv" "clu" "msw" "ejp" "efh" "ast" "ikt"
    "jlm" "dex" "jxy" "akv" "jqv" "svy" "dkq" "gos" "auy" "hux" "eqs" "afv" "irx" "oyz" "hvz" "iuv" "hpx" "itz" "foq"
    "axy" "twx" "cuw" "bgu" "qvy" "rxz" "sux" "svz" "ehl" "ewy" "jsx" "qwx" "qxz" "fln" "dny" "jru" "uvw" "txz" "moz"
    "fmq" "kly" "fsx" "mwz" "gwx" "muy" "nqu" "ltw" "ruz" "osw" "dsy" "uvx" "hyz" "gmu" "acl" "dek" "pqs" "gjl" "ceg"
    "blv" "oqz" "pqu" "muw" "jny" "cqv" "puw" "ioy" "fmx" "jtx" "hmx" "csx" "iqv" "svw" "iwx" "mpt" "ovy" "ptu" "ewx"
    "nrs" "elz" "suz" "gmt" "huv" "rtx" "lsx" "opv" "nvw" "psu" "esu" "jyz" "fnu" "hsv" "fmn" "iqx" "djl" "ktv" "opw"
    "ekm" "jnv" "hjp" "pxz" "cgt" "inr" "hop" "chv" "lpz" "qvz" "etw" "btx" "dvx" "lru" "fky" "fxy" "hmn" "svx"]])

(deftest solve
  (doseq [[solution & triplets] fixtures]
    (is (= (recover-secret triplets) solution))))