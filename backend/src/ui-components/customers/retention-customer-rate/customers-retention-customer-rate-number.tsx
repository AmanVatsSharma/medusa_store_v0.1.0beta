/*
 * Copyright 2025 sonuram,
 *
 * MIT License
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Heading } from "@medusajs/ui";
import { Grid } from "@mui/material";
import { PercentageComparison } from "../../common/percentage-comparison";
import { IconComparison } from "../../common/icon-comparison";
import { CustomersRetentionCustomerRateResponse } from "../types"

export const RetentionCustomerRateNumber = ({retentionCustomerRateResponse, compareEnabled} : {retentionCustomerRateResponse: CustomersRetentionCustomerRateResponse, compareEnabled?: boolean}) => {
  const currentPercentage: number | undefined =  
    retentionCustomerRateResponse.analytics.current !== undefined ? 
      parseInt(retentionCustomerRateResponse.analytics.current) : undefined;
  const previousPercentage: number | undefined = 
    retentionCustomerRateResponse.analytics.previous !== undefined ? 
      parseInt(retentionCustomerRateResponse.analytics.previous) : undefined;

  return (
    <Grid container alignItems={'center'} spacing={2}>
      <Grid item>
        {currentPercentage !== undefined ? 
          <Heading level="h1">
            {`${currentPercentage}%`}
          </Heading> :
          <Heading level="h3">
            {`No orders or customers`}
          </Heading>
      }
      </Grid>
      {compareEnabled && retentionCustomerRateResponse.analytics.dateRangeFromCompareTo && currentPercentage !== undefined &&
      <Grid item>
        <Grid container alignItems={'center'}>
          <Grid item>
            <IconComparison current={currentPercentage} previous={previousPercentage ? previousPercentage : undefined}/>
          </Grid>
          {previousPercentage !== undefined && <Grid item>
            <PercentageComparison current={currentPercentage.toString()} previous={previousPercentage.toString()} label="%"/>
          </Grid>}
        </Grid>
      </Grid>
      }
    </Grid>
  );
}