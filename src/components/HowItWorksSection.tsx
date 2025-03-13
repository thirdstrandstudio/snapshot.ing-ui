
import { Network, FileCode, Calculator, ArrowDown } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding gradient-bg relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create precise token holder snapshots in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-all duration-300">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-200/50 dark:bg-blue-500/30 rounded-full blur-xl"></div>
              <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Network className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Select Network & Token</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Choose any EVM-compatible network and specify the token contract address you want to analyze.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-all duration-300">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-200/50 dark:bg-blue-500/30 rounded-full blur-xl"></div>
              <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md">
                <FileCode className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Define Parameters</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Set the block height range, minimum balance threshold, and any other filtering criteria for your snapshot.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-all duration-300">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-200/50 dark:bg-blue-500/30 rounded-full blur-xl"></div>
              <div className="relative w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md">
                <Calculator className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Generate Snapshot</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our system processes all transfer events, reconciles account balances, and delivers a comprehensive snapshot.
            </p>
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-8">
            <h3 className="text-2xl font-display font-bold mb-6">Powerful Processing Engine</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg text-center">
                <p className="font-medium">Network Selection</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg text-center flex items-center justify-center">
                <ArrowDown className="h-5 w-5 md:hidden" />
                <svg className="h-5 w-5 hidden md:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg text-center">
                <p className="font-medium">Token Contract</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg text-center flex items-center justify-center">
                <ArrowDown className="h-5 w-5 md:hidden" />
                <svg className="h-5 w-5 hidden md:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="bg-gray-50 dark:bg-gray-750 p-4 rounded-lg text-center">
                <p className="font-medium">Block Range</p>
              </div>
            </div>

            <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-bold text-lg mb-3">Processing Logic</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300">1</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Fetch all token transfer events within the specified block range</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300">2</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Reconstruct balance changes for each account by analyzing transfers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300">3</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Apply filtering criteria (min balance, address range, etc.)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300">4</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Generate comprehensive snapshot with address-to-balance mapping</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-750 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3">User Defined Inputs</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Block height range (start/end)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Minimum token balance threshold</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Address filtering options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Custom data export formats</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-750 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Output Data</h4>
                <div className="font-mono text-sm p-3 bg-gray-100 dark:bg-gray-700 rounded overflow-auto max-h-40">
                  <pre>{`{
  "snapshot": {
    "tokenAddress": "0x123...abc",
    "blockHeight": 16242000,
    "timestamp": "2023-05-15T...",
    "holders": [
      {"address": "0xabc...", "balance": "1250.5"},
      {"address": "0xdef...", "balance": "37240.23"},
      ...
    ],
    "totalHolders": 1542,
    "totalSupply": "10000000"
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
