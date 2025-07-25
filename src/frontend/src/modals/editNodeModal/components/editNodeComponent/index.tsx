import type { ColDef } from "ag-grid-community";
import { useMemo } from "react";
import TableComponent from "@/components/core/parameterRenderComponent/components/tableComponent";
import type { APIClassType } from "@/types/api";
import useColumnDefs from "../../hooks/use-column-defs";
import useRowData from "../../hooks/use-row-data";

export function EditNodeComponent({
  open,
  nodeId,
  nodeClass,
  isTweaks,
  autoHeight,
  hideVisibility,
}: {
  open: boolean;
  nodeId: string;
  nodeClass: APIClassType;
  isTweaks?: boolean;
  autoHeight?: boolean;
  hideVisibility?: boolean;
}) {
  const rowData = useRowData(nodeClass, open);

  const columnDefs: ColDef[] = useColumnDefs(
    nodeId,
    open,
    isTweaks,
    hideVisibility,
  );
  return useMemo(
    () => (
      <div className="flex h-full flex-col">
        <div className="h-full">
          {nodeClass && (
            <TableComponent
              tableOptions={{ hide_options: true, block_hide: true }}
              domLayout={autoHeight ? "autoHeight" : undefined}
              key={"editNode"}
              tooltipShowDelay={0.5}
              columnDefs={columnDefs}
              rowData={rowData}
            />
          )}
        </div>
      </div>
    ),
    [nodeClass],
  );
}
