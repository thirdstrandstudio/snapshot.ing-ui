
import { Send, Users, ChartBar } from "lucide-react";

const AirdropSection = () => {
  return (
    <section id="airdrop" className="section-padding gradient-bg relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full mb-4">
            Airdrop
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            Token <span className="gradient-text">Distribution</span> Made Easy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Use your token holder snapshots to airdrop new tokens with precision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Seamless Airdrop Process
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              SnaptShot.ing makes it simple to distribute tokens to your existing holders. Once you've generated a snapshot, you can use it as the basis for token airdrops with just a few clicks.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Targeted Distribution</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Airdrop tokens to specific segments of your holder base using the filter criteria from your snapshot.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                  <ChartBar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Proportional Allocation</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Distribute new tokens proportionally based on existing holder balances or using custom allocation formulas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                  <Send className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Efficient Execution</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Execute airdrops with optimized gas strategies and transaction batching for cost-effective distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-display font-bold mb-6">Airdrop Workflow</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-300">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Generate Holder Snapshot</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Create a comprehensive snapshot of token holders at your desired block height.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-300">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Define Airdrop Parameters</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Specify the new token contract, allocation formula, and any additional distribution rules.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-300">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Review Distribution Plan</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Preview the exact token distribution before execution, with detailed allocation breakdowns.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-300">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Execute Airdrop</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Initiate the token distribution with optimized transaction batching for efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-blue-700 dark:text-blue-300">5</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Monitor & Verify</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Track the airdrop progress in real-time and verify successful token distribution.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Pro Tip:</span> Use the snapshot filtering features to create more targeted airdrops, such as rewarding long-term holders or active community members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirdropSection;
