import React, { useMemo } from "react";

export const useOverrideParentLink = (
	url: string,
	asNewTab: boolean = false
) => {
	const override = useMemo(
		() => (e: React.FormEvent) => {
			e.preventDefault();
			if (asNewTab) {
				const newTab = window.open(url, "_blank", "noopener,noreferrer");
				if (newTab !== null) {
					newTab.opener = null;
				}
			} else {
				window.location.href = url;
			}
		},
		[url, asNewTab]
	);

	return override;
};
