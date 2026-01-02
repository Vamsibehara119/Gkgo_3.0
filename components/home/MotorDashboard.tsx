import MotorActions from "./MotorActions";
import PolicyList from "./PolicyList";
import QuotesAndClaims from "./QuotesAndClaims";
import PromoCards from "./PromoCards";

export default function MotorDashboard() {
  return (
    <div className="space-y-12">

      {/* TITLE */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Motor Insurance Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Manage all your motor insurance needs in one place.
        </p>
      </div>

      {/* ACTIONS */}
      <MotorActions />

      {/* MY POLICIES */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">My Policies</h2>
        <p className="text-sm text-gray-500">
          Manage your existing policies here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PolicyList />
          <PolicyList />

          {/* ADD POLICY */}
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-base font-semibold">+</span>
                </span>
                <p className="text-sm font-medium text-gray-700">
                Ready to add a new policy?
                </p>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Select here, Find My Policy or Start A Quote to get started.
            </p>
          </div>
        </div>
      </section>

      {/* MY QUOTES */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">My Quotes</h2>
        <p className="text-sm text-gray-500">
          Manage your quotes here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuotesAndClaims type="quote" />
          <QuotesAndClaims type="quote" />

          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-base font-semibold">+</span>
                </span>
                <p className="text-sm font-medium text-gray-700">
                    Ready to add a new quote?
                </p>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Select here or Start A Quote to get started.
            </p>
          </div>
        </div>
      </section>

      {/* CLAIMS */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Claims</h2>
        <p className="text-sm text-gray-500">
          Manage and track your claims here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuotesAndClaims type="claim" />
          <QuotesAndClaims type="claim" />

          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-base font-semibold">+</span>
                </span>
                <p className="text-sm font-medium text-gray-700">
                   Ready start a claim?
                </p>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Select here or Start A Claim to get started.
            </p>
          </div>
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Promotions & Products
        </h2>
        <p className="text-sm text-gray-500">
          See promotions and products tailored for you.
        </p>

        <PromoCards />
      </section>
    </div>
  );
}
