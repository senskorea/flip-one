/* Conservative guard for simple, single-country market-entry requests.
   Multi-country routes, alternatives and negation are left to AI interpretation. */
(function (root) {
  function requiredMarket(query, policy) {
    if (!policy || !new RegExp(policy.marketIntent, 'i').test(query)) return null;
    if (/\b(not|except|without|or)\b|아닌|제외|말고|또는/i.test(query)) return null;
    var found = policy.countries.filter(function (country) {
      return country.aliases.some(function (alias) {
        var escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        var pattern = /[가-힣]/.test(alias) ? escaped : '\\b' + escaped + '\\b';
        return new RegExp(pattern, 'i').test(query);
      });
    });
    return found.length === 1 ? found[0].name : null;
  }
  function supportsMarket(person, market) {
    return !market || ((person.markets || {}).en || []).some(function (value) {
      return value.toLowerCase() === market.toLowerCase();
    });
  }
  var api = { requiredMarket: requiredMarket, supportsMarket: supportsMarket };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.FlipOneMatchingPolicy = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
