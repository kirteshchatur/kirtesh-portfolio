import React, { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-100 space-y-4">
            <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto" />
            <h2 className="text-xl font-bold">Something encountered an issue</h2>
            <p className="text-xs text-zinc-400">
              An unexpected display error occurred. The application is isolated and can be restored.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
