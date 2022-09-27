import React, { useState } from 'react'

import Link from 'next/link';
import { cacl, currentratiocal } from '../actions/ratio';
// value={current_deposits_savings_deposits} onChange={handleChange('current_deposits_savings_deposits')}

const CurrentRatioCalculator = (props) => {

    const [values,setValues] = useState({
        OpeningStock:'0',
        Purchase: '0',
        Purchase_Return: '0',
        COGS: '0',
        Closing_Stock: '',
        LooseTools: '0',
        GoodInTransit: '0',
        StockInTrade: '0',
        ss:'0',
        Inventory: '',
        Debtors:'0',
        NR: '0',
        ProvisionForDoubtfulDebts: '0',
        BadDebts: '0',
        add: '0',
        BankBalance: '0',
        Cheques: '0',
        CashInHand: '0',
        DraftInHand: '0',
        account_receivables: '',
        PE: '0',
        NetWorkingCapital : '',
        AIGS: '0',
        Other_Current_Assets: '',
        D_I_T: '0',
        Creditors: '0',
        BP: '0',
        Trade_Payables: '',
        I_T_R: '0',
        IEI: '0',
        IPS: '0',
        IGTS: '0',
        IDB: '0',
        IMF: '0',
        IPF: '0',
        Current_Investments: '',
        Cash_and_Cash_Equivalents: '',
        LGTE: '0',
        ul: '0',
        sl: '0',
        aste: '0',
        short_term_loan_and_advance: '',
        ca: '',
        cl: '',
        oil: '0',
        oid: '0',
        oe: '0',
        UD: '0',
        IRA: '0',
        cia: '0',
        PFP: '0',
        ESIP: '0',
        PFT: '0',
        PDPS: '0',
        PDES: '0',
        Short_Term_Provision: '',
        VATP: '0',
        CDT: '0',
        CSTP: '0',
        Other_Current_Liabilities: '',
        LRDB: '0',
        LRDO: '0',
        D: '0',
        OLA: '0',
        Short_Term_Borrowings: '',
        Current_Ratio: 0,
        loading:false,
        error: '',
        click:false
    });

    const {
        OpeningStock,
        Purchase,
        Purchase_Return,
        COGS,
        Closing_Stock,
        LooseTools,
        IEI,
        Trade_Payables,
        NetWorkingCapital,
        Creditors,
        BP,
        IPS,
        PFT,
        LRDB,
        Current_Ratio,
        LRDO,
        D,
        error,
        OLA,
        Short_Term_Borrowings,
        PDPS,
        PDES,
        Short_Term_Provision,
        LGTE,
        ul,
        oil,
        oid,
        oe,
        UD,
        IRA,
        cia,
        PFP,
        ESIP,
        VATP,
        CDT,
        CSTP,
        Other_Current_Liabilities,
        sl,
        aste,
        ca,
        cl,
        short_term_loan_and_advance,
        Current_Investments,
        IDB,
        IGTS,
        IMF,
        IPF,
        BankBalance,
        Cheques,
        CashInHand,
        DraftInHand,
        Cash_and_Cash_Equivalents,
        GoodInTransit,
        Inventory,
        StockInTrade,
        ss,
        Debtors,
        NR,
        ProvisionForDoubtfulDebts,
        BadDebts,
        add,
        I_T_R,
        D_I_T,
        account_receivables,
        PE,
        AIGS,
        Other_Current_Assets,
        click
    } = values;

    const handleChange = name => e => {
        const value = e.target.value;
        setValues({...values,[name]: value,error:''});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values,loading:true});
        const data1 = {
            OpeningStock,
            Purchase,
            Purchase_Return,
            COGS,
            LGTE,
            ul,
            BP,
            Creditors,
            sl,
            aste,
            PFT,
            oil,
            oid,
            oe,
            UD,
            LRDB,
            LRDO,
            D,
            OLA,
            IRA,
            cia,
            PFP,
            ESIP,
            VATP,
            CDT,
            CSTP,
            PDPS,
            PDES,
            LooseTools,
            GoodInTransit,
            D_I_T,
            I_T_R,
            StockInTrade,
            ss,
            IEI,
            IPS,
            IGTS,
            IMF,
            IPF,
            IDB,
            Debtors,
            NR,
            add,
            BankBalance,
            CashInHand,
            DraftInHand,
            Cheques,
            PE,
            AIGS,
            ProvisionForDoubtfulDebts,
            BadDebts
        };

        cacl(data1).then(response => {
            if (response.error){
                setValues({...values, error: response.error,loading: false});
            }
            else {
                props.onSubmit1(response);
                setValues({
                ...values, 
                click:true,
                NetWorkingCapital: response.result.NetWorkingCapital,
                Closing_Stock: response.result.Closing_Stock,
                Inventory: response.result.Inventory,
                account_receivables: response.result.account_receivables,    
                Other_Current_Assets: response.result.Other_Current_Assets,
                Current_Investments: response.result.Current_Investments,
                Cash_and_Cash_Equivalents:  response.result.Cash_and_Cash_Equivalents,
                short_term_loan_and_advance: response.result.short_term_loan_and_advance,
                ca: response.result.ca,
                Trade_Payables: response.result.Trade_Payables,
                Short_Term_Provision: response.result.Short_Term_Provision,
                Other_Current_Liabilities: response.result.Other_Current_Liabilities,
                Short_Term_Borrowings: response.result.Short_Term_Borrowings,
                cl: response.result.cl,
                loading: true
                });
            }
        })
    }
    
    const handleSubmit1 = (e) => {
        e.preventDefault();
        setValues({...values,loading:true});
        const data2 = {
            ca,
            cl
        }

        currentratiocal(data2).then(response => {
            if (response.error){
                console.log(response.error);
            }
            else{
                props.onSubmit2(response)
                setValues({...values, Current_Ratio: response.result.currentRatio});
            }
        })
    }

  return (
    <div className="mt-4">
        <h1 className="font-bold text-2xl text-yellow-500">Current Ratio Calculator:</h1>
        <form className="bg-gray-700 p-4 mt-4 mx-8 rounded-lg text-center" noValidate>
            <div className="mt-8 bg-sky-100 mr-2 ml-2 rounded-lg">
                <div className="flex space-x-4 mr-2 ml-2 mt-4">
                    <div className="relative mb-3 w-1/3 mt-4">
                        <span className="text-sm font-bold mb-4">OPENING STOCK</span><br/>
                        <input type="text" placeholder="Enter Opening Stock" value={OpeningStock} onChange={handleChange("OpeningStock")} className="mt-4 px-3 py-3 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3 mt-4">
                        <span className="text-sm font-bold mb-4">PURCHASES</span><br/>
                        <input type="text" placeholder="Enter Purchases made during the year" value={Purchase} onChange={handleChange("Purchase")} className="mt-4 px-3 py-3 placeholder-slate-300 font-bold text-black relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3 mt-4">
                        <span className="text-sm font-bold mb-4">GOODS RETURNED AFTER PURCHASE</span><br/>
                        <input type="text" value={Purchase_Return} onChange={handleChange("Purchase_Return")} placeholder="Enter the value of goods returned" className="mt-4 px-3 py-3 text-black placeholder-slate-300 font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">COST OF GOODS SOLD</span><br/>
                        <input type="text" value={COGS} onChange={handleChange('COGS')} placeholder="Enter Cost of Goods Sold" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm text-red-500 font-semibold">CLOSING STOCK</span>
                        <input type="text" placeholder="Closing Stock(Auto-Calculated)" value={Closing_Stock} disabled={true} className="mt-3.5 px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-500 font-bold text-0.5xl relative rounded border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">LOOSE TOOLS</span><br/>
                        <input type="text" value={LooseTools} onChange={handleChange('LooseTools')} placeholder="Enter value of Loose Tools" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">GOODS IN TRANSIT</span><br/>
                        <input type="text" value={GoodInTransit} onChange={handleChange('GoodInTransit')} placeholder="Enter value of Goods In Transit" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">STOCK IN TRADE</span><br/>
                        <input type="text" placeholder="Enter value of Stock In Trade" value={StockInTrade} onChange={handleChange('StockInTrade')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">STORES AND SPARES</span><br/>
                        <input type="text" value={ss} onChange={handleChange('ss')} placeholder="Enter value of Stores and spares if any" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-7 mr-2 ml-2">
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-semibold text-red-500">INVENTORY</span>
                        <input type="text" value={Inventory} placeholder="Inventory(Auto-Calculated)" disabled={true} className="mt-3.5 px-3 py-3 bg-gray-300 placeholder-slate-300 font-bold text-0.5xl text-red-500 relative rounded border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-600 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">SUNDRY DEBTORS</span><br/>
                        <input type="text" value={Debtors} onChange={handleChange('Debtors')} placeholder="Debtors Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">BILLS RECEIVABLES</span><br/>
                        <input type="text" value={NR} onChange={handleChange('NR')} placeholder="Enter value of Bills Receivables if any" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">PROVISION FOR DOUBTFUL DEBTS</span><br/>
                        <input type="text" value={ProvisionForDoubtfulDebts} onChange={handleChange('ProvisionForDoubtfulDebts')} placeholder="Provision for Doubtful Debts" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">BAD DEBTS</span><br/>
                        <input type="text" value={BadDebts} onChange={handleChange('BadDebts')} placeholder="Bad Debts Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">ALLOWANCES FOR BAD DEBTS</span><br/>
                        <input type="text" value={add} onChange={handleChange('add')} placeholder="Allowance for bad Debts if any" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-semibold mb-4 text-red-500">ACCOUNT RECEIVABLES</span><br/>
                        <input type="text" value={account_receivables} placeholder="Account Receivables(Auto-Calculated)" disabled className="mt-3 font-bold px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-600 relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">PREPAID EXPENSES</span><br/>
                        <input type="text" placeholder="Prepaid Expenses" value={PE} onChange={handleChange('PE')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">ACCRUED INTEREST ON GOVT SECURITIES</span><br/>
                        <input type="text" value={AIGS} onChange={handleChange('AIGS')} placeholder="Accrued Interest on Govt Securities if any" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-semibold text-red-500 mb-4">OTHER CURRENT ASSETS</span>
                        <input type="text" value={Other_Current_Assets} placeholder="Other Current Assets(Auto-Calculated)" disabled className="mt-3 px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/2">
                        <span className="text-sm font-bold mb-4">NET DEFFERED ASSETS</span><br/>
                        <input type="text" value={D_I_T} onChange={handleChange('D_I_T')} placeholder="Deffered Income Taxes" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/2">
                        <span className="text-sm font-bold mb-4">INCOME TAX REFUND</span><br/>
                        <input type="text" value={I_T_R} onChange={handleChange('I_T_R')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>  
                <hr/>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">AMOUNT INVESTED IN EQUITY SHARES</span><br/>
                        <input type="text" value={IEI} onChange={handleChange('IEI')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">AMOUNT INVESTED IN PREFERENCE SHARES</span><br/>
                        <input type="text" value={IPS} onChange={handleChange('IPS')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">AMOUNT INVESTED IN GOVT SECURITIES & TRUST</span><br/>
                        <input type="text" value={IGTS} onChange={handleChange('IGTS')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">AMOUNT INVESTED IN BONDS OR DEBENTURES</span><br/>
                        <input type="text" value={IDB} onChange={handleChange('IDB')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">AMOUNT INVESTED IN MUTUAL FUNDS</span><br/>
                        <input type="text" value={IMF} onChange={handleChange('IMF')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">AMOUNT INVESTED IN PARTNERSHIP FIRMS</span><br/>
                        <input type="text" value={IPF} onChange={handleChange('IPF')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-semibold text-red-500 mb-4">CURRENT INVESTMENTS</span>
                        <input type="text" value={Current_Investments} placeholder="Current Investments(Auto-Calculated)" disabled className="mt-2 px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">CASH AT BANK</span><br/>
                        <input type="text" value={BankBalance} onChange={handleChange('BankBalance')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">CHEQUES IN HAND(YET TO BE REALISED)</span><br/>
                        <input type="text" value={Cheques} onChange={handleChange('Cheques')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">CASH IN HAND</span><br/>
                        <input type="text" value={CashInHand} onChange={handleChange('CashInHand')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">DEMAND DRAFTS IN HAND</span><br/>
                        <input type="text" value={DraftInHand} onChange={handleChange('DraftInHand')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-semibold text-red-500 mb-4">CASH AND CASH EQUIVALENTS</span>
                        <input type="text" value={Cash_and_Cash_Equivalents} placeholder="Cash and Cash Equivalents(Auto-Calculated)" disabled className="mt-3 px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr />
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">LOAN GIVEN TO EMPLOYEE</span><br/>
                        <input type="text" value={LGTE} onChange={handleChange('LGTE')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">UNSECURED LOAN</span><br/>
                        <input type="text" value={ul} onChange={handleChange('ul')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">SECURED LOAN</span><br/>
                        <input type="text" value={sl} onChange={handleChange('sl')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">ADVANCE SALARY PAID TO EMPLOYEES</span><br/>
                        <input type="text" value={aste} onChange={handleChange('aste')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-semibold text-red-500 mb-4">SHORT TERM LOAN AND ADVANCES</span>
                        <input type="text" value={short_term_loan_and_advance} placeholder="Short Term Loan & Advances(Auto-Calculated)" disabled className="mt-4 px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <br/>
            </div>
            <hr style={{'border': '1px solid white', 'marginTop':'4px'}} />
            <div className="mt-2 bg-stone-200 mr-2 ml-2 rounded-lg">
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">SUNDRY CREDITORS</span><br/>
                        <input type="text" value={Creditors} onChange={handleChange('Creditors')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">BILLS PAYABLE</span><br/>
                        <input type="text" value={BP} onChange={handleChange('BP')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-semibold text-red-500 mb-4">TRADE PAYABLES</span>
                        <input type="text" value={Trade_Payables} placeholder="Trade Payables(Auto-Calculated)" disabled className="mt-3 px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">OUTSTANDING INTEREST ON LOANS</span><br/>
                        <input type="text" value={oil} onChange={handleChange('oil')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">OUTSTANDING INTEREST ON DEBENTURES</span><br/>
                        <input type="text" value={oid} onChange={handleChange('oid')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">OUTSTANDING EXPENSES</span><br/>
                        <input type="text" value={oe} onChange={handleChange('oe')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">UNPAID DIVIDEND</span><br/>
                        <input type="text" value={UD} onChange={handleChange('UD')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">INCOME RECEIVED IN ADVANCE</span><br/>
                        <input type="text" value={IRA} onChange={handleChange('IRA')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">CALLS IN ADVANCE</span><br/>
                        <input type="text" value={cia} onChange={handleChange('cia')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">PF PAYABLE</span><br/>
                        <input type="text" value={PFP} onChange={handleChange('PFP')} placeholder="Income Tax Refund Amount" className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">ESI PAYABLE</span><br/>
                        <input type="text" value={ESIP} onChange={handleChange('ESIP')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span><br/><br/>
                        <span className="font-semibold text-md text-stone-500">Want to know more about ESI Calculation? <Link href="https://cleartax.in/s/esi-calculation"><a className="font-bold text-blue-500 text-0.5xl" target="_blank" rel="noopener noreferrer">CLICK HERE</a></Link></span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">VAT PAYABLE</span><br/>
                        <input type="text" value={VATP} onChange={handleChange('VATP')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">CORPORATE DIVIDEND TAX PAYABLE</span><br/>
                        <input type="text" value={CDT} onChange={handleChange('CDT')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span><br/><br/>
                        <span className="font-semibold text-md text-stone-500">Want to know more about Corporate DIvidend Tax Calculation? <Link href="https://www.paisabazaar.com/tax/dividend-tax/"><a className="font-bold text-blue-500 text-0.5xl" target="_blank" rel="noopener noreferrer">CLICK HERE</a></Link></span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">CENTRAL SALES TAX PAYABLE</span><br/>
                        <input type="text" value={CSTP} onChange={handleChange('CSTP')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-semibold text-red-500 mb-4">OTHER CURRENT LIABILITIES</span>
                        <input type="text" value={Other_Current_Liabilities} placeholder="Other Current Liabilities(Auto-Calculated)" disabled className="mt-3 px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>  
                <hr/>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">PROVISION FOR TAX</span><br/>
                        <input type="text" value={PFT} onChange={handleChange('PFT')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">DIVIDEND ON PREFERENCE SHARES</span><br/>
                        <input type="text" value={PDPS} onChange={handleChange('PDPS')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">DIVIDEND ON EQUITY SHARES</span><br/>
                        <input type="text" value={PDES} onChange={handleChange('PDES')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-semibold text-red-500 mb-4">SHORT TERM PROVISIONS</span>
                        <input type="text" value={Short_Term_Provision} placeholder="Short Term Provisions(Auto-Calculated)" disabled className="mt-2 px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative mb-3 w-1/3">
                    <span className="text-sm font-bold mb-4">BANK DEBTS PAYABLE WITHIN A YEAR</span><br/>
                        <input type="text" value={LRDB} onChange={handleChange('LRDB')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">THIRD PARTY LOANS PAYABLE WITHIN A YEAR</span><br/>
                        <input type="text" value={LRDO} onChange={handleChange('LRDO')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">AMOUNT DEPOSITED</span><br/>
                        <input type="text" value={D} onChange={handleChange('D')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">OTHER LOAN AND ADVANCES</span><br/>
                        <input type="text" value={OLA} onChange={handleChange('OLA')} className="mt-4 px-3 py-3 placeholder-slate-300 text-black font-bold relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative items-stretch mb-3 w-1/3">
                        <span className="text-sm font-semibold text-red-500 mb-4">SHORT TERM BORROWINGS</span>
                        <input type="text" value={Short_Term_Borrowings} placeholder="Short Term Borrowings(Auto-Calculated)" disabled className="mt-4 px-3 py-3 bg-gray-300 placeholder-slate-300 text-red-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div> 
                <br/>
                <h1 className="text-blue-500 font-bold mt-2">CURRENT ASSETS:</h1>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-full">
                        <input type="text" value={ca} placeholder="Current Assets(Auto-Calculated)" disabled className="mt-2 px-3 py-3 bg-gray-300 placeholder-slate-300 text-blue-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <h1 className="text-blue-500 font-bold mt-2">CURRENT LIABILITIES:</h1>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-full">
                        <input type="text" value={cl} placeholder="Current Liabilities(Auto-Calculated)" disabled className="mt-2 px-3 py-3 bg-gray-300 placeholder-slate-300 text-blue-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <h1 className="text-blue-500 font-bold mt-2">WORKING CAPITAL:</h1>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-full">
                        <input type="text" value={NetWorkingCapital} placeholder="Net Working Capital(Auto-Calculated)" disabled className="mt-2 px-3 py-3 bg-gray-300 placeholder-slate-300 text-blue-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <br/> 
            </div>
            <div className="mt-2 bg-gray-400 rounded-lg">
                {/* Design this area*/}
                {Current_Ratio}
            </div>
            <div className="mt-20">
                <h1 className="font-semibold text-white text-xl">Interpretation:</h1>
                {Current_Ratio < 1.00 ? 
                (
                    <div className="mt-2">
                        {Current_Ratio === 0 ? (
                            <>
                                
                            </>
                        ):(<span className="font-semibold"></span>)}
                        
                    </div>
                ) : (
                    <div className="mt-2">
                        <span className="font-semibold"></span>
                    </div>
                )}
            </div>
            <div className="mt-2 rounded-lg">
                <button onClick={handleSubmit1} disabled={!click} className={!click ? "bg-gray-500 mt-2 mb-2 text-white w-full font-bold py-2 px-4 border-b-4 border-gray-700 rounded":"mt-2 bg-blue-500 mb-2 hover:bg-blue-400 text-white w-full font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"}>
                    CALCULATE CURRENT RATIO
                </button><br/>
                <button onClick={handleSubmit} disabled={(click)} className={click ? "bg-gray-500 text-white mt-2 mb-2 w-full font-bold py-2 px-4 border-b-4 border-gray-700 rounded":'bg-blue-500 hover:bg-blue-400 text-white mt-2 mb-2 w-full font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'}>
                    CALCULATE CURRENT ASSETS AND CURRENT LIABILITIES
                </button><br/>
                <button disabled={(click)} className={click ? "bg-gray-500 text-white mt-2 mb-2 w-full font-bold py-2 px-4 border-b-4 border-gray-700 rounded" : "bg-blue-500 hover:bg-red-400 text-white w-full mt-2 mb-2 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"}>
                    RESET
                </button>
            </div>
        </form>
    </div>
  )
}

export default CurrentRatioCalculator