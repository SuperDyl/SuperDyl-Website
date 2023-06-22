import React, { memo, FunctionComponent, useState } from "react";
import ModTable from "../ModTable";
import { ALL_MC_VERSIONS, ModInfo, filterVersion } from "../../mods";
import { FilterDropdown } from "./styles";

interface FilteredModTableProps {
	mods: ModInfo[];
}

const FilteredModTable: FunctionComponent<FilteredModTableProps> = ({
	mods,
}) => {
	const [mcSelection, setMcSelection] = useState(0);

	return (
		<>
			<FilterDropdown
				select={mcSelection}
				options={ALL_MC_VERSIONS}
				onSelect={(selection: string, result?: number) =>
					setMcSelection(result || 0)
				}
			/>
			<ModTable
				mods={filterVersion(mods, ALL_MC_VERSIONS[mcSelection])}
				mc_version={ALL_MC_VERSIONS[mcSelection]}
			/>
		</>
	);
};

export default memo(FilteredModTable);
