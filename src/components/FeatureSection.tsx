
import { Lock, ArrowDownUp, Tags, FileSearch, Clock, Filter } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="section-padding relative bg-white dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-6">
              <FileSearch className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Deep Blockchain Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Scan and analyze token transfer events across any block range with comprehensive data extraction and processing.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-6">
              <ArrowDownUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Cross-Network Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Works across all major EVM-compatible networks including Ethereum, Polygon, Binance Smart Chain, Arbitrum, and more.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-6">
              <Filter className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Advanced Filtering</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Set minimum balance thresholds, define address ranges, and apply custom filters to create precisely targeted snapshots.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Historical Point-in-Time</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Capture token holder balances at any historical block height, allowing for time-specific analysis and comparisons.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-6">
              <Tags className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Token Agnostic</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Works with any ERC-20, ERC-721, or ERC-1155 token standard, providing flexibility for different token types.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-6">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">Secure Processing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              All data is processed securely, with optional encrypted storage and strict access controls for sensitive information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
