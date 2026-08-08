const ProgressBar = ({ count }) => {
  const progress = Math.min(count, 10);

  return (
    <div className="w-full">

      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-indigo-600 transition-all duration-500"
          style={{ width: `${(progress / 10) * 100}%` }}
        ></div>

      </div>

      <p className="mt-2 text-sm text-slate-500">
        {count} / 10
      </p>

    </div>
  );
};

export default ProgressBar;